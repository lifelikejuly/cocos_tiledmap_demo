import { _decorator, Camera, CameraComponent,Animation, Component, EventKeyboard, Input, input, KeyCode, math, RigidBody2D, UITransform, v2, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoleController')
export class RoleController extends Component {

    _speed: number = 10;
    sp = v2(0, 0);
    lv: math.Vec2;
    heroAnim: Animation;
    state: string = '';



    start() {
        this.heroAnim = this.node.getComponent(Animation);
    }



    setState(state) {
        if (this.state == state) return;
        this.state = state;
        this.heroAnim.play(this.state);
    }


    onKeyDown(evt: EventKeyboard) {
        Input[evt.keyCode] = 1;

        if (evt.keyCode == KeyCode.SPACE) {
            let pos = this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
        }
        switch (evt.keyCode) {
            case KeyCode.KEY_A:

                break
            case KeyCode.KEY_D:

                break
            case KeyCode.KEY_W:

                break
            case KeyCode.KEY_S:

                break
        }
    }
    onKeyUp(evt: EventKeyboard) {
        Input[evt.keyCode] = 0;
        switch (evt.keyCode) {
            case KeyCode.KEY_A:
            case KeyCode.KEY_D:
            case KeyCode.KEY_W:
            case KeyCode.KEY_S:
                break
        }
    }

    protected onEnable(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this)
    }

    protected onDisable(): void {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this)
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this)
    }

    protected onLoad(): void {

    }

    update(deltaTime: number) {
        // 操作
        // if (Input[KeyCode.KEY_A] || Input[KeyCode.ARROW_LEFT]) {
        //     this.sp.x = -1;
        // } else if (Input[KeyCode.KEY_D] || Input[KeyCode.ARROW_RIGHT]) {
        //     this.sp.x = 1;
        // } else {
        //     this.sp.x = 0;
        // }
        // if (Input[KeyCode.KEY_W] || Input[KeyCode.ARROW_UP]) {
        //     this.sp.y = 1;
        // } else if (Input[KeyCode.KEY_S] || Input[KeyCode.ARROW_DOWN]) {
        //     this.sp.y = -1;
        // } else {
        //     this.sp.y = 0;
        // }

        // // 碰撞

        // this.lv = this.node.getComponent(RigidBody2D).linearVelocity;

        // // 移动
        // const pos = this.node.position;
        // if (this.sp.x) {
        //     // this.node.setPosition(pos.x + this.sp.x * this._speed * deltaTime,pos.y);
        //     this.lv.y = 0;
        //     this.lv.x = this.sp.x * this._speed;
        // } else if (this.sp.y) {
        //     // this.node.setPosition(pos.x ,pos.y + this.sp.y * this._speed * deltaTime);
        //     this.lv.x = 0;
        //     this.lv.y = this.sp.y * this._speed;
        // } else {
        //     this.lv.y = this.lv.x = 0;
        // }
        // // console.log(`${this.lv.x} -- ${this.lv.y}`);
        // this.node.getComponent(RigidBody2D).linearVelocity = this.lv;

        // let state = '';
        // if (this.sp.x == 1) {
        //     state = 'role_right';
        // } else if (this.sp.x == -1) {
        //     state = 'role_left';
        // } else if (this.sp.y == 1) {
        //     state = 'role_up';
        // } else if (this.sp.y == -1) {
        //     state = 'role_down';
        // } else {
        //     state = '';
        // }
        // if (state) {
        //     this.setState(state);
        // } else {
        //     this.heroAnim.stop();
        // }

    }
}

