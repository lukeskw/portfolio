export function getStackIcon(name: string): string {
  type StackIconsProps = {
    [key: string]: string
  }

  const stackIcons: StackIconsProps = {
    react: require('@/assets/images/react-icon.svg'),
    javascript: require('@/assets/images/javascript-icon.svg'),
    typescript: require('@/assets/images/typescript-icon.svg'),
    php: require('@/assets/images/php-icon.svg'),
    laravel: require('@/assets/images/laravel-icon.svg'),
    mysql: require('@/assets/images/mysql-icon.svg'),
    postgreSQL: require('@/assets/images/postgresql-icon.svg'),
  }

  return stackIcons[name] || ''
}
