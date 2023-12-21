import styled from "styled-components";
import Theme from "../../themes/theme";

const TitleText = styled.p`
  color: ${Theme.colors.primaryText};
  font-size: 40px;
  font-weight: 700;
`;

const NormalText = styled.p`
  color: ${Theme.colors.secondaryText};
  font-size: 20px;
`;

function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-sm w-full items-center self-center py-[20px]">
        <TitleText className="text-center underline decoration-5 decoration-[#7E6EF8]">
          Koledarček
        </TitleText>
        <NormalText className="text-center">
          V koledarčku se prikazujejo dnevi v trenutno izbranem mesecu in letu.
        </NormalText>
      </div>
    </div>
  );
}

export default Home;
