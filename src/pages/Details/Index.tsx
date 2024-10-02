import { FC } from "react";
import { useParams } from "react-router-dom";
import { cn } from "@/utils/utils";
import ProgressBar from "@ramonak/react-progress-bar";
import usePokemonDetails from "../../hooks/usePokemonDetail";

const Index: FC = () => {
  const { pokeName } = useParams();
  const detail = usePokemonDetails(pokeName || "").pokemonDetails;

  return (
    <div className="px-6 py-7">
      <div className="text-inner-primary font-normal text-lg">
        #{detail?.id !== undefined ? `${1000 + detail.id}` : "Unknown ID"}
      </div>

      <div className="flex flex-col items-center w-full">
        {/* Pokemon Image */}
        <img
          src={detail?.artworkFront}
          alt={`${pokeName} Image`}
          className={cn("w-52 h-52")}
        />

        {/* Name and Sprite */}
        <div className="flex justify-between items-end">
          <h1 className="text-4xl font-bold text-white">
            {pokeName
              ? pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
              : "Unknown Pokemon"}
          </h1>
          <img
            src={detail?.spriteFront}
            alt={`${pokeName} Sprite`}
            className="bottom-11"
          />
        </div>

        {/* Health Attack and Defense*/}
        <div className="bg-outer-secondary flex flex-col gap-4 rounded-xl p-4 w-full">
          {/* Health */}
          <div>
            <h3 className="text-inner-primary font-normal text-base">Health</h3>
            <ProgressBar
              completed={detail?.health ?? 0}
              maxCompleted={1000}
              bgColor="#2AE3B7"
              baseBgColor="#3D4466"
              isLabelVisible={false}
            />
            <h2 className="font-bold text-2xl text-white">
              {detail?.health}{" "}
              <span className="font-normal text-base">from 1000</span>
            </h2>
          </div>

          <div className="w-full border-b-2 border-outer-primary"></div>

          {/* Attack and Defense */}
          <div className="grid grid-cols-2">
            {/* Attack */}
            <div className="">
              <h3 className="text-inner-primary font-normal text-base">
                Attack
              </h3>
              <h2 className="font-bold text-2xl text-white">
                {detail?.attack}
              </h2>
            </div>

            {/* Defense */}
            <div>
              <h3 className="text-inner-primary font-normal text-base">
                Defense
              </h3>
              <h2 className="font-bold text-2xl text-white">
                {detail?.defense}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
