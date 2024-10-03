import { FC } from "react";
import DisplayOption from "../../components/DisplayOption/Index";
import Content from "../../components/Content/Index";

const Index: FC = () => {
  return (
    <>
      <section className="flex flex-col gap-4 px-5 py-4">
        <DisplayOption />
        <Content />
      </section>
    </>
  );
};

export default Index;
