#!/bin/bash
# clean-ports.sh
echo "Clearing ports 3000-3015..."

for port in {3000..3015}; do
    pid=$(lsof -ti :$port)
    if [ -n "$pid" ]; then
        echo "Found process using port $port (PID: $pid) - terminating..."
        kill -9 $pid
        echo "Port $port cleared"
    else
        echo "Port $port is already free"
    fi
done

echo "Port cleaning complete"