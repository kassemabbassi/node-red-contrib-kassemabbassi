# node-red-contrib-kassemabbassi

A Node-RED node that converts temperatures between Celsius and Fahrenheit.

## Overview

Receives a number in `msg.payload`, converts it, and sends the result
on the output. Useful for IoT flows with temperature sensors.

## Installation

Run the following command in your Node-RED user directory (~/.node-red):

    npm install node-red-contrib-kassemabbassi

Or use **Menu > Manage palette > Install** in the Node-RED editor.

## How to use

1. Drag the **kassem** node from the *function* category into your flow.
2. Double-click it and choose the mode:
   - Celsius to Fahrenheit
   - Fahrenheit to Celsius
3. Send a number in `msg.payload`.

## Example

Input: `msg.payload = 25` (mode Celsius to Fahrenheit)
Output: `msg.payload = 77`, `msg.unit = "°F"`

If the payload is not a number, the node reports an error.

## Change log

- 1.0.0: Initial release

## License

Apache-2.0