import styleNames from "@/components/HeartMain/index.module.css";
import MenuGroup from "../MenuGroup";
import Aside from "../Aside";
const HeartMain = () => {
  return (
    <>
      <div className={styleNames.appMain}>
        <Aside></Aside>
        <main className="design-canvas" id="canvas">
          <div className="canvas-toolbar">
            <button id="preview-btn">预览</button>
            <button id="save-btn">保存</button>
          </div>
          <div className="canvas-area" id="drop-area">
            <h2 className="text-align: center; margin-top: 40px;">
              欢迎使用低代码管理平台
            </h2>
            <p className="text-align: center; color: #666;">
              请从左侧菜单选择模块开始设计
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default HeartMain;
