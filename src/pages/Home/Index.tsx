import { FC } from "react";
import Header from "../../components/Header/Index";
import DisplayOption from "../../components/DisplayOption/Index";
import Content from "../../components/Content/Index";

const Index: FC = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-4 px-5 py-4">
        <DisplayOption />
        <Content />
      </section>
    </>
  );
};

export default Index;
