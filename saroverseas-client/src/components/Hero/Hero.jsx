import './Hero.css'

export default function Hero({
  image = '',
  mobileImage = '',
  alt = 'Hero banner',
  position = 'center center',
  mobilePosition = 'center center',
}) {
  const style = {
    '--hero-bg': image ? `url(${image})` : '#e9eef6',
    '--hero-bg-mobile': mobileImage ? `url(${mobileImage})` : (image ? `url(${image})` : '#e9eef6'),
    '--hero-pos': position,
    '--hero-pos-mobile': mobilePosition,
  }

  return (
    <section className="hero" style={style} role="img" aria-label={alt}>
      {/* empty — purely visual banner */}
    </section>
  )
}
