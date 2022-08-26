import { Swipe, Button, SwipeItem,Popup,Progress  } from "vant";
let plugins = [Swipe, Button, SwipeItem,Popup,Progress]

export default function getVant(app) {
    plugins.forEach(currentItem => {
        return app.use(currentItem);
    });
};
