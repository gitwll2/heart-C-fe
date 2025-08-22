import sytleName from "@/components/HeartHeader/index.module.css";
import { FC } from "react";
type HeaderPropsType = {};
const HeartHeader: FC<HeaderPropsType> = (props: HeaderPropsType) => {
  return (
    <header className={sytleName.appHeader}>
      <div className="sytleName.logo">低代码平台</div>
      <div className="sytleName.user-menu">用户设置</div>
    </header>
  );
};

export default HeartHeader;
