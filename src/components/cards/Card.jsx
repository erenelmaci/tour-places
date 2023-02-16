import CardStyle from "./Card.module.css"

const Card = ({ title, desc, image }) => {
  return (
    <div className={CardStyle["container"]}>
      <article className={CardStyle["card"]}>
        <div className={CardStyle["temporary_text"]}>
          <img className={CardStyle["images"]} src={image} alt="img" />
        </div>
        <div className={CardStyle["card_content"]}>
          <span className={CardStyle["card_title"]}>{title}</span>
          <span className={CardStyle["card_subtitle"]}>{desc}</span>
          <p className={CardStyle["card_description"]}>{title}</p>
        </div>
      </article>
    </div>
  )
}

export default Card
