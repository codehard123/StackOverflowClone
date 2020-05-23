import React from "react";
import "./question.css";
function Question() {
  return (
    <div className="qa-part-q-list">
      <div className="qa-q-list">
        <div className="qa-q-list-item" id="q83889">
          <div className="qa-q-item-stats">
            <div className="qa-voting qa-voting-net" id="voting_83889">
              <div className="qa-vote-buttons qa-vote-buttons-net">
                <input
                  title="Click to vote up"
                  name="vote_83889_1_q83889"
                  onclick="return qa_vote_click(this);"
                  type="submit"
                  value="+"
                  className="qa-vote-first-button qa-vote-up-button"
                />
                <input
                  title="Click to vote down"
                  name="vote_83889_-1_q83889"
                  onclick="return qa_vote_click(this);"
                  type="submit"
                  value="–"
                  className="qa-vote-second-button qa-vote-down-button"
                />
              </div>
              <div className="qa-vote-count qa-vote-count-net">
                <span className="qa-netvote-count">
                  <span className="qa-netvote-count-data">0</span>
                  <span className="qa-netvote-count-pad"> votes</span>
                </span>
              </div>
              <div className="qa-vote-clear"></div>
            </div>
            <span className="qa-a-count qa-a-count-zero">
              <span className="qa-a-count-data">0</span>
              <span className="qa-a-count-pad"> answers</span>
            </span>
            <span className="qa-view-count">
              <span className="qa-view-count-data">13</span>
              <span className="qa-view-count-pad"> views</span>
            </span>
          </div>
          <div className="qa-q-item-main">
            <div className="qa-q-item-title">
              <a href="./83889/want-website-q2a-add-question-page-show-the-question-page-how">
                <span title="Hi. I want to put a website box on the q2a add question page and show it on the question page. As in the example below. How can I do it ? Thanks...">
                  I want to put a website box on the q2a add question page and
                  show it on the question page. How can I do it ?
                </span>
              </a>
            </div>
            <span className="qa-q-item-avatar-meta">
              <span className="qa-q-item-avatar">
                <img
                  src="./?qa=image&amp;qa_blobid=12697203736109131893&amp;qa_size=20"
                  width="20"
                  height="20"
                  className="qa-avatar-image"
                  alt=""
                />
              </span>
              <span className="qa-q-item-meta">
                <span className="qa-q-item-what">asked</span>
                <span className="qa-q-item-when">
                  <span className="qa-q-item-when-data">4 hours</span>
                  <span className="qa-q-item-when-pad"> ago</span>
                </span>
                <span className="qa-q-item-where">
                  <span className="qa-q-item-where-pad">in </span>
                  <span className="qa-q-item-where-data">
                    <a href="./core" className="qa-category-link">
                      Q2A Core
                    </a>
                  </span>
                </span>
                <span className="qa-q-item-who">
                  <span className="qa-q-item-who-pad">by </span>
                  <span className="qa-q-item-who-data">EleSSaR</span>
                </span>
              </span>
            </span>
            <div className="qa-q-item-tags">
              <ul className="qa-q-item-tag-list">
                <li className="qa-q-item-tag-item">
                  <a href="./tag/link" className="qa-tag-link">
                    link
                  </a>
                </li>
                <li className="qa-q-item-tag-item">
                  <a href="./tag/how" className="qa-tag-link">
                    how
                  </a>
                </li>
                <li className="qa-q-item-tag-item">
                  <a href="./tag/characters" className="qa-tag-link">
                    characters
                  </a>
                </li>
                <li className="qa-q-item-tag-item">
                  <a href="./tag/user" className="qa-tag-link">
                    user
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="qa-q-item-clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Question;
