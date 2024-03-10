export function paragraph(item, expandedSections, reveal) {
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
            <span className="read-more" onClick={() => togglePara([item[2]])}>
              Read more...
            </span>
          ) : (
            !isRevealed && (
              <span className="read-more" onClick={() => togglePara([item[2]])}>
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
