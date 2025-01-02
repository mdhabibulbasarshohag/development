import "./AboutTrade.css"
import Container from '../../../components/Common/Container/Container';

const AboutTrade = () => {
    return (
        <section className="about--tradeBotWrapper">
            <Container>
                <div className="nr--aboutBot--main--wrapper">
                    <h3 className="subHeader">About Trade BOT</h3>
                    <div className="nr--aboutBot--content--wrapper">
                        <ul>
                            <li className="aboutBotTweentyFourPx">
                                The Loot Bin.AI trading robot has been in operation since January
                                15, 2024, and has not experienced any loss on any of the days since
                                then.
                            </li>
                            <li className="aboutBotTweentyFourPx">
                                Past results indicate future stable success. Lexium AI Trader was
                                developed using a custom pre-trained GPT transformer that was
                                trained on 100,000 pages of spot and futures trading content to
                                create the perfect daily trading bot.
                            </li>
                            <li className="aboutBotTweentyFourPx">
                                Since January 15, 2024, the artificial intelligence represented by
                                the robot has been making a profit every day, demonstrating the
                                amazing capabilities of artificial intelligence. Now this robot is
                                available to all interested investors. The proprietary trading robot
                                continues to demonstrate stable and outstanding results since its
                                launch.
                            </li>
                            <li className="aboutBotTweentyFourPx">
                                The best specialists in finance, marketing, advertising, design and
                                programming are making efforts to develop the Lexium system.
                            </li>
                            <li className="aboutBotTweentyFourPx">
                                The main goals include long-term cooperation, prompt customer
                                support, maintaining automatic balance control and other measures
                                that contribute to the successful development of the project. Join
                                us right now! Cooperation with us is profitable and safe!
                            </li>
                        </ul>
                        <div className="roboto--main--photos">
                            <img src="./assets/images/nr--indexRobot.png" alt="not found" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutTrade;