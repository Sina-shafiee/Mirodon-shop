import classNames from 'classnames';

// skeleton component
const Skeleton = ({ times, className }) => {
  const outerDivClassNames = classNames(
    'relative',
    'bg-gray-200',
    'rounded-lg',
    'mb-2.5',
    'overflow-hidden',
    className
  );
  const innerDivClassNames = classNames(
    'animate-skeleton',
    '-translate-x-full',
    'absolute',
    'inset-0',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-gray-50',
    'to-gray-200'
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, index) => {
      return (
        <div className={outerDivClassNames} key={index}>
          <div className={innerDivClassNames}></div>
        </div>
      );
    });

  return boxes;
};

export default Skeleton;
