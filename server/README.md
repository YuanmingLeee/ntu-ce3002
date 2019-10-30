This sub-project builds the server to receive data from Arduino board, and serve for frontend query.
## Requirement
- Arduino driver
- Windows working environment

## Install
```shell script
conda env create -f environment.yml
conda activate ppg-software
```

## Configuration
1. Open device manager to see which port is your Arduino board connecting to.
2. Change the port name and baudrate accordingly in `core/port_config.py'

## Run
```shell script
uvicorn main:app --host <your-host-ip> --port <your port> --log_level 'warning'
```
Or
```shell script
python main.app
```
And go to http://localhost:8000.
