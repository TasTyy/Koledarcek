import Theme from "../themes/theme";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.div`
  min-width: 320px;
`;

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Theme.colors.background};
`;

function PageContainer() {
  return (
    <PageWrapper>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </PageWrapper>
  );
}

export default PageContainer;
