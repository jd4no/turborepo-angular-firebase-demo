/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// NOTE: Commented out to be able to run linting for now
import { foo } from '@myorg/types';
import * as logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  const value = foo();
  logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase! ' + value);
});
