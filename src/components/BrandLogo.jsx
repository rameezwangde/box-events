export default function BrandLogo({ compact = false, className = '' }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/box-productions-logo.png"
        alt="Box Productions"
        className={`${compact ? 'h-11 w-auto' : 'h-14 w-auto'} object-contain`}
      />
    </span>
  );
}