/* eslint-disable no-console */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';

//synchronous uncaughtException err handle
process.on('uncaughtException', () => {
  process.exit(1);
});

let server: Server;
async function run() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('🛢 Database connect successfully');

    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    console.log('🤢 Failed to connect database', err);
  }

  //asynchronous unhandled Rejection err handled here
  process.on('unhandledRejection', () => {
    console.log('unhandled rejection detect,we closing our server');
    if (server) {
      server.close();
    } else {
      process.exit(1);
    }
  });
}

run();

process.on('SIGTERM', () => {
  if (server) {
    server.close();
  }
});
