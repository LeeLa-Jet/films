import React, { Component } from 'react'

class Page extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const bgStyle = {
      backgroundImage: 'url(' + this.props.item.image + ')',
    };
    return (
      <div className="inner-wrapper">
        <div className="page_info">
          <div className="page_info-image" style={bgStyle}></div>
          <div className="page_info-texts">
            <div className="page_info-text-block">
              <p className="page_info-title">{this.props.item.title}</p>
            </div>
            {this.props.item.year &&
              <div className="page_info-text-block">
                <p className="page_info-subtitle">Год выхода:</p>
                <p className="page_info-text">{this.props.item.year}</p>
              </div>
            }
            {this.props.item.kp_rating &&
              <div className="page_info-text-block">
                <p className="page_info-subtitle">Рейтинг на кинопоиске:</p>
                <p className="page_info-text">{this.props.item.kp_rating}</p>
              </div>
            }
            {this.props.item.man_rating &&
              <div className="page_info-text-block">
                <p className="page_info-subtitle">Мужской рейтинг:</p>
                <p className="page_info-text">{this.props.item.man_rating}</p>
              </div>
            }
            {this.props.item.woman_rating &&
              <div className="page_info-text-block">
                <p className="page_info-subtitle">Женский рейтинг:</p>
                <p className="page_info-text">{this.props.item.woman_rating}</p>
              </div>
            }
          </div>
        </div>
        <div className="page_info-description">
          {this.props.item.description &&
            <div className="page_info-description-block">
              <p className="page_subtitle">Описание на кинопоиске:</p>
              <p className="page_text">{this.props.item.description}</p>
            </div>
          }
          {this.props.item.comments &&
            <div className="page_info-description-block">
              <p className="page_subtitle">Наши комментарии:</p>
              <p className="page_text">{this.props.item.comments}</p>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Page;
