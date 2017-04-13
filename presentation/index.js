import React from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Layout,
  Code,
  Image
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  waitwat: require("../assets/waitwat.png"),
  ascention: require("../assets/ascention.png"),
  notalways: require("../assets/notalways.png"),
  ariel: require("../assets/ariel.jpg"),
  hipster: require("../assets/hipster.jpg"),
  xteam: require("../assets/xteam.png")
};

preloader(images);

const theme = createTheme({
  primary: "#272334",
  secondary: "#f3f2f6",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Recompose
          </Heading>
          <Heading size={2} fit caps lineHeight={1} textColor="secondary" style={{ marginTop: 40 }}>
            czyli niezbędne narzędzie JavaScriptowego Ninja
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Layout>
            <Image width="200px" height="200px" src={ images.xteam }/>
          </Layout>
          <Layout>
            <Heading size={4} textSize="90" textColor="secondary">
              Bartosz Król
            </Heading>
          </Layout>
          <Layout>
            <Heading size={4} textSize="30" textColor="secondary">
              Full Stack Engineer at X-Team
            </Heading>
          </Layout>
          <Layout>
            <Heading size={4} textSize="30" textColor="secondary">
              Digital Nomad
            </Heading>
          </Layout>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} textSize="30" textColor="secondary" fit>
            Przenieśmy się kilka lat wcześniej...
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="black">
          <Image src={ images.ariel }/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Layout>
            <Heading size={2} textSize="30" textColor="secondary" fit>
              Poradnink jak zostać funkcjonalnym hipsterem
            </Heading>
          </Layout>
          <Layout style={{ marginTop: 20 } } >
            <Image src={ images.hipster }/>
          </Layout>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Code textColor="secondary">
            $ npm install --save recompose
          </Code>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Layout style={{ justifyContent: "center" }}>
            <Heading size={2} caps textSize="40" textColor="secondary">
              Jaki problem rozwiązuje Recompose?
            </Heading>
          </Layout>
          <Layout style={{ marginTop: 30, justifyContent: "center" }} >
            <Appear><Heading size={2} textSize="80" caps textColor="secondary">
              Żaden*
            </Heading></Appear>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={ images.waitwat }/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Layout style={{ justifyContent: "center" }}>
            <Heading size={2} caps textSize="40" textColor="secondary">
              Dlaczego warto użwać Recompose?
            </Heading>
          </Layout>
          <Layout style={{ justifyContent: "center", marginTop: 30 }}>
            <Appear><Heading size={2} textSize="80" caps textColor="secondary">
              Czysty Kod
            </Heading></Appear>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Jaki jest ten mityczny Czysty Kod?
          </Heading>
          <List>
            <Appear><ListItem>Modułowy</ListItem></Appear>
            <Appear><ListItem>Dobrze udokumentowalny</ListItem></Appear>
            <Appear><ListItem>Testowalny</ListItem></Appear>
            <Appear><ListItem>Czyta się go jak dobrą prozę</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <BlockQuote>
            Kod jest odzwierciedleniem Twojej duszy. Zastanów się czy Twoja dusza to gówno.
          </BlockQuote>
          <Cite textColor="secondary">
            Mateusz Budzar
          </Cite>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Czym jest Czysty Kod dla mnie?
          </Heading>
          <Layout style={{ justifyContent: "center", marginTop: 40 }}>
            <Appear><Heading size={2} textSize={ 50 } textColor="secondary">
              Idiomatyczny
            </Heading></Appear>
          </Layout>
          <Layout style={{ justifyContent: "center", marginTop: 40 }}>
            <Appear><Heading size={2} textSize={ 50 } lineHeight={1} textColor="secondary">
              Komponowalny
            </Heading></Appear>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../code/react.example")}
            textSize={ 26 }
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Niestety nie wszystko może takie być...
          </Heading>
          <List>
            <Appear><ListItem>Lifecycle methods</ListItem></Appear>
            <Appear><ListItem><Code textColor="secondary">this.setState</Code></ListItem></Appear>
            <Appear><ListItem>Event handlers</ListItem></Appear>
            <Appear><ListItem>Branches</ListItem></Appear>
            <Appear><ListItem>Pure rendering</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Text fit textColor="secondary">
            Odseparować <strong>Wygląd</strong> od <strong>Efektów</strong>
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Text fit textColor="secondary">
            <strong>Presentational</strong> vs. <strong>Container</strong> Components
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Text fit textColor="secondary">
            Komponenty Wyższego Rzędu (HOC)
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Code textSize="60" fit textColor="secondary">
            HOC :: Component -> Component
          </Code>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../code/hoc.example")}
            textSize={ 30 }
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../code/withLoader.example")}
            textSize={ 26 }
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">
            Spróbujmy może bardziej modułowo
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../code/branch.example")}
            style={ { marginTop: 20 } }
            textSize={ 24 }
          />
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../code/branchloader.example")}
              textSize={ 24 }
            />
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">
            Problemy z React State
          </Heading>
          <List>
            <Appear><ListItem>Połączenie widoku ze stanem</ListItem></Appear>
            <Appear><ListItem>Trudność z ponownym wykorzystaniem</ListItem></Appear>
            <Appear><ListItem>Potrzeba wykorzystania klasy</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../code/withState.example")}
            textSize={ 30 }
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../code/counter.example")}
            textSize={ 24 }
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../code/counterandhandlers.example")}
            style={ { height: 420 } }
            textSize={ 26 }
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Modułowość oraz Redux
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../code/reducer.example")}
            textSize={ 24 }
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../code/localStateReducer.example")}
            textSize={ 22 }
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">
            *Recompose ułatwia w tworzeniu HOC
          </Heading>
          <List>
            <Appear><ListItem>Optymalizacje renderowania</ListItem></Appear>
            <Appear><ListItem><Code textColor="secondary">DisplayName</Code></ListItem></Appear>
            <Appear><ListItem><Code textColor="secondary">shallowEqual</Code></ListItem></Appear>
            <Appear><ListItem>Konwertowanie do Klasy</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">
            Co jeszcze potrafi Recompose?
          </Heading>
          <List>
            <Appear><ListItem>Tworzenie komponentów z propsów</ListItem></Appear>
            <Appear><ListItem>Manipulacja Contextem</ListItem></Appear>
            <Appear><ListItem>Lifecycle methods</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">
            Recompose dla Reacta czym Lodash dla JavaScriptu
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Czy warto używać Recompose?
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Image src={ images.ascention } height={ 600 }/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Image src={ images.notalways } height={ 600 }/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            That's all folks!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
