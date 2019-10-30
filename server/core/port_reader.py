from datetime import datetime

import asyncio
import threading
from typing import Optional

import serial_asyncio

from core import port_config

base_time = datetime.now().timestamp()
arr = [{'x': base_time, 'y': 0}] * 500


class PortReader(object):
    def __init__(self):
        self.loop = asyncio.new_event_loop()
        self.config_serial()
        self.loop.run_forever()

    def config_serial(self):
        coro = serial_asyncio.create_serial_connection(self.loop, SerialHandler, port_config.PORT_NAME,
                                                       baudrate=port_config.BAUD_RATE)
        self.loop.run_until_complete(coro)
        print('Using port name ' + port_config.PORT_NAME)

    def close(self):
        self.loop.close()


class SerialHandler(asyncio.Protocol):
    def __init__(self):
        super().__init__()
        self.buffer = ''
        self.transport = None

    def connection_made(self, transport: serial_asyncio.SerialTransport) -> None:
        self.transport = transport
        transport.serial.rts = False
        # clear buffer
        transport.serial.flush()

    def data_received(self, data: bytes) -> None:
        if len(data) == 1:
            self.buffer += data.decode('utf-8')
            if self.buffer.endswith('\r\n'):
                try:
                    buffers = self.buffer.rsplit('\r\n')
                    time = datetime.now().timestamp() - base_time
                    data = [{'x': time + 0.01 * idx, 'y': int(s.rstrip())} for idx, s in enumerate(buffers)]
                    SerialHandler.push_value(data)
                except ValueError:
                    pass
                self.buffer = ''

    def connection_lost(self, exc: Optional[Exception]) -> None:
        asyncio.get_event_loop().stop()

    @classmethod
    def push_value(cls, data: list):
        global arr
        arr = arr[len(data):] + data


t = threading.Thread(target=PortReader)
t.start()
