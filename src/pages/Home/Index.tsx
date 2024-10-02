import { FC, useState } from "react";
import DisplayOption from "../../components/DisplayOption/Index";
import Content from "../../components/Content/Index";

const Index: FC = () => {
  const [isTwoGrid, setIsTwoGrid] = useState<boolean>(false);

  const handleDisplayOption = (option: boolean) => {
    setIsTwoGrid(option);
  };

  return (
    <>
      <section className="flex flex-col gap-4 px-5 py-4">
        <DisplayOption displayOptionFromChild={handleDisplayOption} />
        <Content contentLayout={isTwoGrid} />
      </section>
    </>
  );
};

export default Index;
