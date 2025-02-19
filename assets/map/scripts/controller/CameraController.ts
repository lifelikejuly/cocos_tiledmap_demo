import { _decorator, Camera, Component, Node, size, UITransform, v3, view } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('CameraController')
export class CameraController extends Component {

    @property(Node)
    public role : Node

    start() {

        let mapWidth = view.getViewportRect().width;
        let mapHeight = view.getViewportRect().height;

        console.log(`<><> mapWidth ${mapWidth} -- mapHeight ${mapHeight}`);
        // this.getComponent(Camera).
        // this.getComponent(Camera).far = Math.max(mapWidth, mapHeight) * 2 * 5;

    }

    update(deltaTime: number) {
        // 相机跟随用户移动
        if(!this.role) return;
        let w_pos = this.role.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
        let n_pos = this.node.parent.getComponent(UITransform).convertToWorldSpaceAR(w_pos);
        this.node.position = v3(Math.round(n_pos.x),Math.round(n_pos.y),Math.round(n_pos.z)); 
    }
}

