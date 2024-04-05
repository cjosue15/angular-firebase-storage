import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'file-upload-4c12d',
          appId: '1:877234192203:web:dead31df6348fe53e7b2ce',
          storageBucket: 'file-upload-4c12d.appspot.com',
          apiKey: 'AIzaSyBlJQCXophX6SnaueFoSwv1-qFzvu_9Rq0',
          authDomain: 'file-upload-4c12d.firebaseapp.com',
          messagingSenderId: '877234192203',
        }),
      ),
    ),
    importProvidersFrom(provideStorage(() => getStorage())),
  ],
};
