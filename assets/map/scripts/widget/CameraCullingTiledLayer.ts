import { Mat4, TiledLayer, Vec2, Vec3 } from "cc";
import { EDITOR_NOT_IN_PREVIEW } from "cc/env";


const _mat4_temp = new Mat4();
const _vec2_temp = new Vec2();
const _vec3_temp = new Vec3();
const _vec3_temp2 = new Vec3();

class CameraCullingTiledLayer extends TiledLayer{

    public updateCulling(): void {
        if (EDITOR_NOT_IN_PREVIEW) {
            this.enableCulling = false;
        } else if (this._enableCulling) {
            this.node.updateWorldTransform();
            Mat4.invert(_mat4_temp, this.node.getWorldMatrix());
            const camera = this._reinstallCamera(); // developer should call updateCalling if the camera has changed
            if (camera) {
                _vec3_temp.x = -camera.width*0.5;;
                _vec3_temp.y = -camera.height*0.5;;
                _vec3_temp.z = 0;
                _vec3_temp2.x = camera.width * 2;
                _vec3_temp2.y = camera.height * 2;
                _vec3_temp2.z = 0;
                camera.screenToWorld(_vec3_temp, _vec3_temp);
                camera.screenToWorld(_vec3_temp2, _vec3_temp2);
                // camera.getScreenToWorldPoint(_vec2_temp, _vec2_temp);
                // camera.getScreenToWorldPoint(_vec2_temp2, _vec2_temp2);
                Vec3.transformMat4(_vec3_temp, _vec3_temp, _mat4_temp);
                Vec3.transformMat4(_vec3_temp2, _vec3_temp2, _mat4_temp);
                this.updateViewPort(_vec3_temp.x, _vec3_temp.y, _vec3_temp2.x - _vec3_temp.x, _vec3_temp2.y - _vec3_temp.y);
            }
        }
    }
}