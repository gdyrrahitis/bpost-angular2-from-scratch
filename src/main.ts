import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';


platformBrowserDynamic().bootstrapModule(AppModule).then(
    success => console.log('AppComponent bootstrapped! Angular2 is running!'),
    error => console.log(error)
);