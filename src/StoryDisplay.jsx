import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export function StoryDisplay({
  windowWidth,
  selectedValue,
  check,
  mappable,
  menu,
  search,
  sorted,
  flipped,
  paragraph,
}) {
  return (
    <>
      {windowWidth > 425 ? (
        <div>
          {selectedValue && (
            <StoryDisplayLarge>
              {check && mappable && sorted(mappable)}
            </StoryDisplayLarge>
          )}

          {(!menu || search.length === 0) && (
            <StoryDisplayLarge>
              {check && mappable && sorted(mappable)}
            </StoryDisplayLarge>
          )}

          {search.length > 0 && menu && (
            <StoryDisplayLarge>{sorted(mappable)}</StoryDisplayLarge>
          )}
        </div>
      ) : (
        <StoryDisplaySmall
          flipped={flipped}
          paragraph={paragraph}
          mappable={mappable}
        />
      )}
    </>
  );
}
function StoryDisplayLarge({ children }) {
  return (
    <div className="container">
      <section className="item-section-main">
        <div className="item-section-container">{children}</div>
      </section>
    </div>
  );
}
function StoryDisplaySmall({ flipped, paragraph, mappable }) {
  function paragraph(item) {
    if (item) {
      const words = item[1].split(" ");
      const isExpanded = expandedSections[item[2]];
      const isRevealed = reveal[item[2]];

      if (words.length > 24 && !isExpanded) {
        return (
          <div
            className="item-section"
            key={item[2]}
            style={isRevealed ? revealMain : {}}
          >
            <div className="item-category">
              <h3>{item[0]}</h3>
              <p>{formattedDate(item[4])}</p>
            </div>
            {isRevealed && (
              <BsArrowLeft className="left-arrow" onClick={goback} />
            )}
            <h2 style={isRevealed ? revealhead : {}}>{item[3]}</h2>
            <div className="show-para">
              {isRevealed ? (
                <p style={isRevealed ? revealPara : {}}>
                  {item[1].slice(0, item[1].length)}...
                </p>
              ) : (
                <p>{item[1].slice(0, 154)}...</p>
              )}
            </div>
            {windowWidth > 425 ? (
              <span
                type="button"
                className="read-more"
                onClick={() => togglePara([item[2]])}
              >
                Read more...
              </span>
            ) : (
              !isRevealed && (
                <span
                  className="read-more"
                  onClick={() => togglePara([item[2]])}
                >
                  Read more...
                </span>
              )
            )}
          </div>
        );
      } else {
        return (
          <div
            className="item-section"
            key={item[2]}
            style={isRevealed ? revealMain : {}}
          >
            <div className="item-category">
              <h3>{item[0]}</h3>
              <p>{formattedDate(item[4])}</p>
            </div>
            {isRevealed && (
              <BsArrowLeft className="left-arrow" onClick={goback} />
            )}
            <h2 style={isRevealed ? revealhead : {}}>{item[3]}</h2>
            <div className="show-para">
              <p style={isRevealed ? revealPara : {}}>{item[1]}</p>
            </div>
            {words.length > 24 && windowWidth > 425 ? (
              <span className="read-more" onClick={() => togglePara(item[2])}>
                Read less
              </span>
            ) : (
              words.length > 24 &&
              !isRevealed && (
                <span className="read-more" onClick={() => togglePara(item[2])}>
                  Read more...
                </span>
              )
            )}
          </div>
        );
      }
    }
  }
  return (
    <div className="container">
      <section className="item-section-main">
        <Swiper
          effect="coverflow"
          // grabCursor='true'
          centeredSlides="true"
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
        >
          <div className="swiper-wrapper">
            {(() => {
              const sortedMappable = mappable.sort((a, b) => {
                const dateA = new Date(formattedDate2(Object.values(a[1])[4]));
                const dateB = new Date(formattedDate2(Object.values(b[1])[4]));

                if (dateA < dateB) {
                  return flipped ? 1 : -1;
                }

                if (dateA > dateB) {
                  return flipped ? -1 : 1;
                }

                const timeA = formattedTime(Object.values(a[1])[4]);
                const timeB = formattedTime(Object.values(b[1])[4]);

                if (timeA < timeB) {
                  return flipped ? 1 : -1;
                }
                if (timeA > timeB) {
                  return flipped ? -1 : 1;
                }
              });

              return sortedMappable.map((items, index) => {
                const random = Math.random() * 4;
                return (
                  <SwiperSlide key={random} className="swiper-slide">
                    {paragraph(Object.values(items[1]))}
                  </SwiperSlide>
                );
              });
            })()}
          </div>
        </Swiper>
      </section>
    </div>
  );
}
