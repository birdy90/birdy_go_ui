import { createRoot } from 'react-dom/client';
import './global.css';
import {Button} from "./uikit";

document.body.innerHTML = '<div id="app"></div>';
const appElement = document.getElementById('app');

if (appElement) {
    const root = createRoot(appElement);
    root.render(<Button color="primary" variant="bordered" className="m-4">Hello, world</Button>);
}