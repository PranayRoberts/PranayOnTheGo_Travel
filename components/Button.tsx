import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string;
  onClick?: () => void;
}

const Button = ({ type, title, icon, variant, full, href, onClick }: ButtonProps) => {
  const classNames = `flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`;

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className={classNames}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      </Link>
    );
  }

  return (
    <button
      className={classNames}
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button