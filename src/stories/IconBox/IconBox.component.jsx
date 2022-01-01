// @flow strict
import React from 'react';

type Props = {
  /**
   * Additional CSS classes to add to the `button` element.
   * @type {String}
   */
  className: string | '',
  /**
   * The children component to be rendered
   * @type {Node}
   */
  children: React$Node
};

IconBox.defaultProps = {
  className: 'white bn'
};

/**
 * A box with an icon and text
 */
export function IconBox({ className, children }: Props) {
  return (
    <button
      className={`br3 f3 h-btn bg-launchpad flex items-center justify-center outline-0 pointer pointer:hover ph3 pv2 ${className}`}
    >
      {children}
      <style jsx global>{`
        .bg-launchpad {
          background-color: #151d27;
        }
        .bg-launchpad:hover {
          color: #151d27;
          background-color: #ff9700;
          transition: background-color 0.2s ease-in-out;
        }
        .h-btn {
          height: 3rem;
        }
      `}</style>
    </button>
  );
}

export default IconBox;
