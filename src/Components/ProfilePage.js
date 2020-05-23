import React from "react";
import Navbar from "./Navbar";

function ProfilePage() {
  return (
    <div>
      <Navbar />
      <div className="qa-body-wrapper">
        <div className="qa-main-wrapper">
          <div className="qa-main">
            <div className="qa-main-heading">
              <h1>User Scott</h1>
            </div>
            <div className="qa-part-form-profile">
              <form method="post" action="../user/Scott">
                <table className="qa-form-wide-table">
                  <tbody id="avatar">
                    <tr>
                      <td className="qa-form-tall-data" colspan="2">
                        <div className="qa-form-tall-image">
                          <a href="../user/Scott" className="qa-avatar-link">
                            <img
                              src="../?qa=image&amp;qa_blobid=15880420961156606097&amp;qa_size=250"
                              width="65"
                              height="65"
                              className="qa-avatar-image"
                              alt=""
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr id="duration">
                      <td className="qa-form-wide-label">Member for:</td>
                      <td className="qa-form-wide-data">
                        <span className="qa-form-wide-static">
                          10 years (since Apr 19, 2010)
                        </span>
                      </td>
                    </tr>
                    <tr id="level">
                      <td className="qa-form-wide-label">Type:</td>
                      <td className="qa-form-wide-data">
                        <span className="qa-form-wide-static">
                          Administrator
                        </span>
                      </td>
                    </tr>

                    <tr id="permits">
                      <td
                        className="qa-form-wide-label"
                        style={{ verticalAlign: "top" }}
                      >
                        Extra privileges:
                      </td>
                      <td className="qa-form-wide-data">
                        <span className="qa-form-wide-static">
                          Voting posts down
                          <br />
                          Recategorizing any question
                          <br />
                          Editing any question
                          <br />
                          Editing any answer
                          <br />
                          Editing any comment
                          <br />
                          Editing posts silently
                          <br />
                          Closing any question
                          <br />
                          Selecting answer for any question
                          <br />
                          Viewing IPs of anonymous posts
                          <br />
                          Viewing who voted or flagged posts
                          <br />
                          Approving or rejecting posts
                          <br />
                          Hiding or showing any post
                          <br />
                          Deleting hidden posts
                          <br />
                          Viewing the newest users page
                          <br />
                          Viewing the special users page
                        </span>
                      </td>
                    </tr>
                    <tr id="userfield-5">
                      <td className="qa-form-wide-label">Q2A site:</td>
                      <td className="qa-form-wide-data">
                        <span className="qa-form-wide-static">
                          <a
                            href="http://pokemondb.net/pokebase/"
                            rel="nofollow"
                          >
                            http://pokemondb.net/pokebase/
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr id="userfield-1">
                      <td className="qa-form-wide-label">Full name:</td>
                      <td className="qa-form-wide-data">
                        <span className="qa-form-wide-static"></span>
                      </td>
                    </tr>
                    <tr id="userfield-2">
                      <td className="qa-form-wide-label">Location:</td>
                      <td className="qa-form-wide-data">
                        <span className="qa-form-wide-static">England</span>
                      </td>
                    </tr>
                    <tr id="userfield-3">
                      <td className="qa-form-wide-label">Personal site:</td>
                      <td className="qa-form-wide-data">
                        <span className="qa-form-wide-static">
                          <a href="https://github.com/svivian" rel="nofollow">
                            https://github.com/svivian
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr id="userfield-4">
                      <td
                        className="qa-form-wide-label"
                        style={{ verticalAlign: "top" }}
                      >
                        About:
                      </td>
                      <td className="qa-form-wide-data">
                        <span className="qa-form-wide-static">
                          All my Q2A plugins I've developed are available on
                          Github at the address above.
                          <br />
                          <br />
                          If you have a question on how to use Q2A, please DON'T
                          SEND ME A PRIVATE MESSAGE. Ask the question on the
                          Question2Answer Q&amp;A - I visit regularly so I will
                          answer it if I can!
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <div className="qa-part-form-activity">
              <h2>
                <span id="activity">Activity by Scott</span>
              </h2>
              <table className="qa-form-wide-table">
                <tbody>
                  <tr id="points">
                    <td className="qa-form-wide-label">Score:</td>
                    <td className="qa-form-wide-data">
                      <span className="qa-form-wide-static">
                        <span className="qa-uf-user-points">203,970</span>{" "}
                        points (ranked #
                        <span className="qa-uf-user-rank">2</span>)
                      </span>
                    </td>
                  </tr>
                  <tr id="questions">
                    <td className="qa-form-wide-label">Questions:</td>
                    <td className="qa-form-wide-data">
                      <span className="qa-form-wide-static">
                        <span className="qa-uf-user-q-posts">195</span> (
                        <span className="qa-uf-user-q-selects">38</span> with
                        best answer chosen)
                      </span>
                    </td>
                  </tr>
                  <tr id="answers">
                    <td className="qa-form-wide-label">Answers:</td>
                    <td className="qa-form-wide-data">
                      <span className="qa-form-wide-static">
                        <span className="qa-uf-user-a-posts">1Name,675</span> (
                        <span className="qa-uf-user-a-selecteds">309</span>{" "}
                        chosen as best)
                      </span>
                    </td>
                  </tr>
                  <tr id="comments">
                    <td className="qa-form-wide-label">Comments:</td>
                    <td className="qa-form-wide-data">
                      <span className="qa-form-wide-static">
                        <span className="qa-uf-user-c-posts">1,894</span>
                      </span>
                    </td>
                  </tr>
                  <tr id="votedon">
                    <td className="qa-form-wide-label">Voted on:</td>
                    <td className="qa-form-wide-data">
                      <span className="qa-form-wide-static">
                        <span className="qa-uf-user-q-votes">392</span>{" "}
                        questions,{" "}
                        <span className="qa-uf-user-a-votes">490</span> answers
                      </span>
                    </td>
                  </tr>
                  <tr id="votegave">
                    <td className="qa-form-wide-label">Gave out:</td>
                    <td className="qa-form-wide-data">
                      <span className="qa-form-wide-static">
                        <span className="qa-uf-user-upvotes">769</span> up
                        votes, <span className="qa-uf-user-downvotes">113</span>{" "}
                        down votes
                      </span>
                    </td>
                  </tr>
                  <tr id="votegot">
                    <td className="qa-form-wide-label">Received:</td>
                    <td className="qa-form-wide-data">
                      <span className="qa-form-wide-static">
                        <span className="qa-uf-user-upvoteds">2,947</span> up
                        votes, <span className="qa-uf-user-downvoteds">54</span>{" "}
                        down votes
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProfilePage;
