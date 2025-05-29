type ButtonProps = {
    content: string
    bg?: string
    color?: string
    textSize?: any
}


const Button = ({ content,bg,color,textSize}:ButtonProps) => {
    const classes= `rounded-full px-4 py-2 ${textSize} ${bg} ${color}`
  return (
    <div>
        <button className={classes}>{content}</button>
    </div>
  )
}

export default Button