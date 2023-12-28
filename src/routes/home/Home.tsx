import styled from "styled-components";
import Theme from "../../themes/theme";
import Calendar from "../../components/Calendar";

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
    <div className="flex flex-col justify-center">
      <div className="max-w-screen-sm w-full items-center self-center py-[20px]">
        <TitleText className="text-center underline decoration-5 decoration-[#7E6EF8]">
          Koledarček
        </TitleText>
        <NormalText className="text-center pb-10">
          V koledarčku se prikazujejo dnevi v trenutno izbranem mesecu in letu.
        </NormalText>
        <Calendar />
      </div>
    </div>
  );
}

export default Home;
