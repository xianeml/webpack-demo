import { run } from './app/app.js';
import './main.scss';
import { AlertService } from './app/alert.service.js';
import { ComponentService } from './app/components.service.js';

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
