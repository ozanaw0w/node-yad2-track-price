# Node Yad2 Automated Price Tracking and Email Notification
This project aims to develop an automated system for studying the process of price tracking and email notifications. The script provides step-by-step details on how to implement the functionality of tracking the price of a product listed on a specific website and sending email notifications when the price changes.

## Prerequisites
- [Node.js and NPM](https://nodejs.org)
- [MongoDB Database](https://www.mongodb.com)
- Email 

## Install
```
git clone git@github.com:ozanaw0w/node-yad2-track-price.git
cd node-yad2-track-price
npm install
```

## Setup
Set these environment variables in a .env file located in the project's root directory. Make sure to replace the placeholder values with your actual email address, desired interval value, and MongoDB connection URI.

- **EMAIL:** The email address where you want to receive price change notifications.
- **EMAIL_SERVICE:** The email address provider.
- **EMAIL_PASSWORD:** The email address account password.
- **INTERVAL (Optional):** The time interval (in milliseconds) at which the script will check for price updates. The default value is 60,000 milliseconds (1 minute).
- **MONGODB_URI:** The connection URI for your MongoDB database.

### Yad2 Website URL
Provide the URL of the product on Yad2 that you want to track. Assign the URL to the url variable in the script, replacing ```https://www.yad2.co.il/item/vmwkxft2?utm_campaign=m-ToAd&utm_source=clipboard&utm_content=Nadlan&openedFrom=share``` with the appropriate URL.

### MIT LICENSE
Copyright 2023 Dor Ozana

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
