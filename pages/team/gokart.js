import React from "react";
import axios from "axios";

const GokartTeam = ({ teamCTO, teamManagers, teamMechanics }) => {
  // GET MANAGERS
  const getManagers = () => {
    let list = [];
    let result = [];

    teamManagers.map((manager) => {
      return list.push(
        <div className="BoxGrid_item col-md-6 my-4">
          <a href={manager.linkedin} class="text-light splitbanner_wrapper">
            <div class="splitbanner_item">
              <div class="splitbanner_content-text">
                <div class="splitbanner_content-inside">
                  <p class="lead splitbanner_pre-title">
                    {manager.sub_division} MANAGER
                  </p>
                  <h2 class="title ">{manager.name}</h2>
                  <br></br>
                  <a
                    href={manager.linkedin}
                    class="text-light btn btn-outline-light btn"
                  >
                    DISCOVER MORE
                  </a>
                </div>
              </div>
              <div class="splitbanner_content-media">
                <div class="ImgAnimation_wrapper">
                  <div class="ImgAnimation_content">
                    <div class="ImgAnimation_inner">
                      <img
                        src={manager.foto}
                        alt=""
                        className="Img_image Img_image-absolute Img_image-cover"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row justify-content-center">
          {list[i] ? list[i] : null}
          {list[i + 1] ? list[i + 1] : null}
        </div>
      );
    }

    return result;
  };

  // GET MECHANICS
  const getMechanics = () => {
    let list = [];
    let result = [];

    teamMechanics.map((mechanic) => {
      return list.push(
        <div className="BoxGrid_item col-md-3 mb-4">
          <a className="text-light BoxGrid_image" href={mechanic.linkedin}>
            <div className="overlay-div">
              <img
                className="card-img overlay-img"
                width="100%"
                height="133%"
                src={mechanic.foto}
                alt="thumbnail"
              />
            </div>

            <div className="card-img-overlay d-flex align-items-end">
              <div>
                <p className="lead akira mb-0">
                  {mechanic.sub_division} {mechanic.jabatan}
                </p>
                <h2>{mechanic.name}</h2>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  {/* <Link className="btn btn-primary" role="button">Read</Link> */}
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 4) {
      result.push(
        <div key={i} className="row justify-content-center">
          {list[i] ? list[i] : null}
          {list[i + 1] ? list[i + 1] : null}
          {list[i + 2] ? list[i + 2] : null}
          {list[i + 3] ? list[i + 3] : null}
        </div>
      );
    }

    return result;
  };

  // HTML
  return (
    <main>
      {/* HEADLINE */}
      <div className="container my-5 px-5">
        <p className="team-headline text-center">GOKART TEAM</p>
      </div>

      <a href={teamCTO.linkedin} class="text-light splitbanner_wrapper">
        <div class="splitbanner_item">
          <div class="splitbanner_content-text">
            <div class="splitbanner_content-inside">
              <p class="lead splitbanner_pre-title">CHIEF TECHNICAL OFFICER</p>
              <h2 class="title ">{teamCTO.name}</h2>
              <br></br>
              <a
                href={teamCTO.linkedin}
                class="text-light btn btn-outline-light btn"
              >
                DISCOVER MORE
              </a>
            </div>
          </div>
          <div class="splitbanner_content-media">
            <div class="ImgAnimation_wrapper">
              <div class="ImgAnimation_content">
                <div class="ImgAnimation_inner">
                  <img
                    src={teamCTO.foto}
                    alt=""
                    className="Img_image Img_image-absolute Img_image-cover"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>

      <div className="BoxGrid_wrapper py-2 px-4">
        <div className="BoxGrid_content">
          <div className="">{getManagers()}</div>
        </div>
      </div>

      <div className="BoxGrid_wrapper px-4">
        <div className="BoxGrid_content">
          <div className="">{getMechanics()}</div>
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  let teamCTO = [];
  let teamManagers = [];
  let teamMechanics = [];

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/team/gokart`
    );
    teamCTO = res.data.cto[0];
    teamManagers = res.data.managers;
    teamMechanics = res.data.mechanics;
  } catch (err) {}

  return {
    props: {
      teamCTO,
      teamManagers,
      teamMechanics,
    },
  };
}

export default GokartTeam;
