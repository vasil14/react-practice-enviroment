import styled from 'styled-components';

const StyledCard = styled.div`
  width: 260px;
  height: 350px;
  background-color: aliceblue;
  position: relative;
  border-radius: 20px;
`;

const CardHeader = styled.div<{ $darkTheme?: boolean }>`
  background-color: ${(props) => (props.$darkTheme ? '#212121' : '#0a85be')};
  color: #fff;
  border-radius: 20px;
  width: 100%;
  height: 120px;
`;

const Avatar = styled.img<{ $darkTheme?: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid;
  border-color: ${(props) => (props.$darkTheme ? '#212121' : '#0a85be')};
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardBody = styled.div`
  width: 100%;
  margin-top: 35px;

  .card-title {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
  }

  .card-subtitle {
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    color: #636363;
    margin-bottom: 20px;
  }
`;

const CardSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  max-width: 200px;
  margin: auto;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 200px;
  margin: auto;
  margin-top: 20px;
`;

export { Avatar, StyledCard, CardHeader, CardBody, CardSocials, CardFooter };
