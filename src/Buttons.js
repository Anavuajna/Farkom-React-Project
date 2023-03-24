function Buttons ({chosenCategory}) {
    return (
        <div className="">
            <button className="item-btn" onClick={() => chosenCategory("ручной")}>РУЧНОЙ ИНСТРУМЕНТ</button>
            <button className="item-btn" onClick={() => chosenCategory("электро")}>ЭЛЕКТРИЧЕСКИЙ ИНСТРУМЕНТ</button>
            <button className="item-btn" onClick={() => chosenCategory("сантехника")}>САНТЕХНИЧЕСКОЕ ОБОРУДОВАНИЕ</button>
            <button className="item-btn" onClick={() => chosenCategory("лкм")}>ЛАКОКРАСОЧНЫЕ ИЗДЕЛИЯ</button>
            <button className="item-btn" onClick={() => chosenCategory("метиз")}>МЕТИЗЫ И КРЕПЕЖ</button>
            <button className="item-btn" onClick={() => chosenCategory("скобяные")}>СКОБЯНЫЕ ИЗДЕЛИЯ</button>
            <button className="item-btn" onClick={() => chosenCategory("сварка")}>СВАРОЧНОЕ ОБОРУДОВАНИЕ</button>
            <button className="item-btn" onClick={() => chosenCategory("садовый")}>САДОВЫЙ ИНВЕНТАРЬ</button>
            <button className="item-btn" onClick={() => chosenCategory("вентиляция")}>ВЕНТЕЛЯЦИОННОЕ ОБОРУДОВАНИЕ</button>
        </div>
    )
}

export default Buttons;