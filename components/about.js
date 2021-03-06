import { up } from "styled-breakpoints";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Underline } from "../styles/parts";

const About = () => {
  return (
    <Container id="about">
      <header>
        <p>Concerned about your shelf stock?</p>
        <p>Do you have everything you need in your cupboards?</p>
        <h2>
          <Underline>ReStock can help!</Underline>
        </h2>
        <p>
          It's time to shelf care. Take the worry out of stocking your shelves
          with ReStock. This free, <Underline>easy to use app</Underline> works
          out how much you will need of an essential item over a set time
          period.
        </p>
      </header>
      <div className="row">
        <img src="/images/shelves.png" alt="" />
        <h3>
          Keep your shelves stocked with the{" "}
          <Underline>amount you need</Underline>
        </h3>
      </div>
      <div className="row reverse">
        <h3>
          <Underline>Reduce the stress of worrying</Underline> if you have
          enough supplies
        </h3>
        <img src="/images/peace_of_mind.png" alt="" />
      </div>
    </Container>
  );
};
export default About;

const Container = styled.section`
  background: ${theme.colors.secondary};
  color: white;
  text-align: center;
  position: relative;
  z-index: 1;
  letter-spacing: .5px;

  ${up("tablet")} {
    margin: -200px 0;
    padding: 200px 0;
    margin-top: -500px;
    background-color: transparent;
    background-image: url('/shapes/orange_background.png');
    background-size: 110% 100%;
    background-position: top right;
    background-repeat: no-repeat;
    width: 100vw;
  }
  ${up("desktop")} {
    padding: 350px 0;
    margin: -350px 0;
    margin-top: -650px;
  }

  img {
    max-width: 70%;
    margin: 20px auto;
  }

  header {
    ${up("tablet")} {
      padding-top: 280px;
      padding-bottom: 20px;
      margin: 50px 0;

      p,
      h2,
      h3 {
        width: 80%;
        margin: 40px auto;
        letter-spacing: .5px;
      }

      p {
        font-size: 1.5em;
      }

      h2 {
    font-size: 3em;
      }
    }
  }

  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    ${up("tablet")} {
      margin: 50px 0;
    }

    &.reverse {
      flex-direction: column-reverse;
      ${"" /* color: #333; */}
      color: ${theme.colors.text};
    }

    &,
    &.reverse {
      ${up("tablet")} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;

        p, h3 {
          max-width: 28ch;
          font-size: 1.5em;
          margin: 0 auto;
          letter-spacing: .5;
        }
      }
    }
  }
`;
