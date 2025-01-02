import Container from "../../../components/Common/container/Container";
import './Banner.css'

const Banner = () => {
    return (
        <section className="nr--banner--wrapper">
            <Container>
                <div className="content--wrapper">
                    <div className="profit--to--day--main">
                        <h5 className="tweentyPxText">
                            Profit to day <span>4.34%</span>
                        </h5>
                    </div>
                    <div className="nr--header--main">
                        <h1 className="mainHeader">
                            Automated Trading, <br />
                            Fully Built By AI
                        </h1>
                        <p className="tweentyFourPx">
                            Buy, sell, and grow your crypto with Loot Bin.AI,
                            the&nbsp;platform&nbsp;dedicated to&nbsp;every trader at every
                            level.
                        </p>
                        <div className="nr--getStrated--banner">
                            <div className="nr--getStrat--btn">
                                <a href="#">Get Strated</a>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            <div className="nr--baner--rightFreame">
                <img src="./assets/images/bannerRightFreame.png" alt="not found" />
            </div>
        </section>
    );
};

export default Banner;