/* @ds-bundle: {"format":4,"namespace":"PrecisionElectronicsDesignSystem_c79de0","components":[{"name":"Blockquote","sourcePath":"components/content/Blockquote.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"}],"sourceHashes":{"components/content/Blockquote.jsx":"adea33d2aab7","components/content/Card.jsx":"c7a7120fb42c","components/content/Eyebrow.jsx":"ad3b5c9027fc","components/content/Tag.jsx":"103765446a9d","components/forms/Button.jsx":"86ae81c64559","components/forms/Checkbox.jsx":"5422ced6da37","components/forms/Input.jsx":"16a728f27ec7","components/forms/Radio.jsx":"d6f14d79f716","ui_kits/website/app.jsx":"91dc6069e41e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PrecisionElectronicsDesignSystem_c79de0 = window.PrecisionElectronicsDesignSystem_c79de0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Blockquote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Precision Electronics — Blockquote
 * Left yellow rule, no radius. For testimonials and pull quotes.
 */
function Blockquote({
  children,
  cite,
  author,
  role,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      borderLeft: '3px solid var(--pe-yellow)',
      borderRadius: 'var(--radius-none)',
      padding: 'var(--space-3) var(--space-5)',
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(1.125rem, 1.5vw + 0.25rem, 1.5rem)',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
      color: 'var(--text-primary)',
      background: 'transparent'
    }
  }, children), (author || role || cite) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-3)',
      paddingLeft: 'var(--space-5)',
      fontFamily: 'var(--font-heading)',
      fontSize: '0.9rem',
      color: 'var(--text-secondary)'
    }
  }, author && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)'
    }
  }, author), author && (role || cite) && /*#__PURE__*/React.createElement("span", null, " \u2014 "), role || cite));
}
Object.assign(__ds_scope, { Blockquote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Blockquote.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Precision Electronics — Card
 * Square-cornered, bordered panel. Optional interactive hover-lift with a
 * yellow top-rule reveal.
 */
function Card({
  children,
  variant = 'primary',
  padding = 'md',
  interactive = false,
  topRule = false,
  as = 'div',
  style,
  ...props
}) {
  const variants = {
    primary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-secondary)'
    },
    secondary: {
      background: 'var(--surface-panel)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-secondary)'
    },
    accent: {
      background: 'var(--surface-accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent'
    }
  };
  const pads = {
    none: '0',
    sm: 'var(--card-pad-sm)',
    md: 'var(--card-pad)',
    lg: 'var(--space-10)'
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-card)',
      padding: pads[padding],
      transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      const rule = e.currentTarget.querySelector('[data-toprule]');
      if (rule) rule.style.transform = 'scaleX(1)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
      const rule = e.currentTarget.querySelector('[data-toprule]');
      if (rule) rule.style.transform = 'scaleX(0)';
    } : undefined
  }, props), (topRule || interactive) && /*#__PURE__*/React.createElement("span", {
    "data-toprule": "",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: 'var(--pe-yellow)',
      transform: topRule ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Precision Electronics — Eyebrow
 * Small kicker above a heading. Optional yellow tick + uppercase label.
 */
function Eyebrow({
  children,
  tick = true,
  variant = 'default',
  as = 'div',
  style,
  ...props
}) {
  const colors = {
    default: 'var(--text-secondary)',
    accent: 'var(--pe-navy)',
    inverse: 'var(--text-inverse-secondary)'
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.55em',
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--eyebrow-size)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      lineHeight: 'var(--eyebrow-lh)',
      color: colors[variant],
      ...style
    }
  }, props), tick && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '1.6em',
      height: '2px',
      background: 'var(--pe-yellow)',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Precision Electronics — Tag
 * Square micro-label for categories, specs and statuses. Uppercase, tight.
 */
function Tag({
  children,
  variant = 'default',
  iconLeft,
  style,
  ...props
}) {
  const variants = {
    default: {
      background: 'var(--pe-navy-a10)',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-secondary)'
    },
    accent: {
      background: 'var(--pe-yellow)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent'
    },
    success: {
      background: 'rgba(31,138,84,0.14)',
      color: 'var(--pe-success)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35em',
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--tag-size, 0.75rem)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: 'var(--tag-pad-y) var(--tag-pad-x)',
      borderRadius: 'var(--radius-tag)',
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, props), iconLeft, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Precision Electronics — Button
 * Rounded (0.75rem) action element in an otherwise square system.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = 'button',
  style,
  ...props
}) {
  const sizes = {
    sm: {
      fontSize: '0.88rem',
      padding: '0.7em 1.15em',
      gap: '0.4em'
    },
    md: {
      fontSize: '1rem',
      padding: '0.85em 1.5em',
      gap: '0.5em'
    },
    lg: {
      fontSize: '1.13rem',
      padding: '1em 1.9em',
      gap: '0.55em'
    }
  };
  const variants = {
    primary: {
      background: 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-text)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--btn-secondary-bg)',
      color: 'var(--btn-secondary-text)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'var(--pe-white)',
      color: 'var(--pe-navy)',
      border: '1px solid transparent'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `pe-btn pe-btn--${variant}`,
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizes[size].gap,
      fontFamily: 'var(--font-button)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: sizes[size].fontSize,
      lineHeight: 1,
      letterSpacing: '0',
      padding: sizes[size].padding,
      borderRadius: 'var(--radius-button)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--btn-primary-bg-hover)';else if (variant === 'secondary') e.currentTarget.style.background = 'var(--btn-secondary-bg-hover)';else if (variant === 'outline' || variant === 'ghost') e.currentTarget.style.background = 'var(--pe-navy-a05)';else if (variant === 'inverse') e.currentTarget.style.background = 'var(--pe-neutral-100)';
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.background = variants[variant].background;
    }
  }, props), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Precision Electronics — Checkbox
 * Square control, yellow when checked with navy check.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style,
  ...props
}) {
  const inputId = id || (label ? `pe-cb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '1.15rem',
      height: '1.15rem',
      flexShrink: 0,
      borderRadius: '3px',
      border: `1.5px solid ${isOn ? 'var(--pe-yellow)' : 'var(--border-strong)'}`,
      background: isOn ? 'var(--pe-yellow)' : 'transparent',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, isOn && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2 L5 8.6 L9.5 3.4",
    stroke: "var(--pe-navy)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, props)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Precision Electronics — Input
 * Square (0px radius) text field with a bottom-weighted, datasheet feel.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = 'text',
  iconLeft,
  disabled = false,
  required = false,
  style,
  ...props
}) {
  const inputId = id || (label ? `pe-input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--pe-danger)' : 'var(--border-secondary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '0.8rem',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pe-danger)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '0.85rem',
      display: 'inline-flex',
      color: 'var(--text-secondary)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    disabled: disabled,
    required: required,
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--pe-navy-a05)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      padding: `var(--input-pad-y) var(--input-pad-x)`,
      paddingLeft: iconLeft ? '2.6rem' : 'var(--input-pad-x)',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? 'var(--pe-danger)' : 'var(--pe-navy)';
      e.currentTarget.style.boxShadow = `0 0 0 3px ${error ? 'rgba(192,57,43,0.2)' : 'var(--pe-yellow-a40)'}`;
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, props))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: error ? 'var(--pe-danger)' : 'var(--text-secondary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Precision Electronics — Radio
 * Round control (the one place roundness is total) with yellow dot.
 */
function Radio({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  name,
  value,
  onChange,
  style,
  ...props
}) {
  const inputId = id || (label ? `pe-radio-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '1.15rem',
      height: '1.15rem',
      flexShrink: 0,
      borderRadius: 'var(--radius-round)',
      border: `1.5px solid ${isOn ? 'var(--pe-yellow)' : 'var(--border-strong)'}`,
      background: 'transparent',
      transition: 'border-color var(--dur-fast) var(--ease-standard)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, isOn && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '0.6rem',
      height: '0.6rem',
      borderRadius: 'var(--radius-round)',
      background: 'var(--pe-yellow)'
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, props)), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* Precision Electronics — Website UI kit
   Composed marketing homepage using the design-system components.
   Exposes <App/> on window for index.html to mount. */
const {
  useState
} = React;
const DS = window.PrecisionElectronicsDesignSystem_c79de0;
const {
  Button,
  Card,
  Tag,
  Eyebrow,
  Blockquote,
  Input,
  Checkbox,
  Radio
} = DS;
const MAX = 1280;

/* ---- Icon helper (Lucide) ---- */
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  stroke = 1.75,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': stroke
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      ...style
    }
  });
}

/* ================= NAV ================= */
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Capabilities', 'Quality', 'Industries', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(242,242,242,0.86)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-primary)' : '1px solid transparent',
      transition: 'all var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAX,
      margin: '0 auto',
      height: '4.5rem',
      padding: '0 var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-precision-electronics.svg",
    alt: "Precision Electronics",
    style: {
      height: 26
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: `#${l.toLowerCase()}`,
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '0.95rem',
      fontWeight: 500,
      color: 'var(--text-primary)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#contact",
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Request a Quote"))));
}

/* ================= HERO ================= */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      marginTop: '-4.5rem',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: "url('../../assets/hero-jet.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(27,49,83,0.86) 0%, rgba(27,49,83,0.55) 55%, rgba(27,49,83,0.15) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: MAX,
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      paddingTop: '5rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    variant: "inverse"
  }, "ISO 9001 Registered \xB7 Since 1968"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'clamp(2.6rem, 5vw, 4.21rem)',
      margin: '1rem 0 1.25rem'
    }
  }, "Custom magnetics,", /*#__PURE__*/React.createElement("br", null), "built to spec."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-inverse-secondary)',
      fontSize: 'var(--text-xl)',
      maxWidth: 540,
      marginBottom: '2rem'
    }
  }, "Transformers, inductors and toroidal coils for aerospace, defense and industry \u2014 from first prototype to full production."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Request a Quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg"
  }, "Download Capabilities")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: '2.5rem',
      flexWrap: 'wrap'
    }
  }, ['Prototype → Production', 'MIL-STD Tested', 'Made in USA'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    variant: "inverse"
  }, t))))));
}

/* ================= CAPABILITIES ================= */
const CONSTRUCTIONS = [{
  icon: 'circle-dot',
  name: 'Toroidal Coils',
  desc: 'Low-loss, low-EMI designs wound to your electrical and mechanical requirements.'
}, {
  icon: 'shield',
  name: 'Hermetically Sealed',
  desc: 'Fully sealed transformers for avionics and harsh, high-reliability environments.'
}, {
  icon: 'box',
  name: 'Epoxy / RTV Molded',
  desc: 'Ruggedized, vibration-resistant potting for demanding field conditions.'
}, {
  icon: 'droplet',
  name: 'Oil / Silicone Filled',
  desc: 'Thermal and dielectric performance for high-voltage applications.'
}, {
  icon: 'layers',
  name: 'Low Profile',
  desc: 'Space-constrained, board-level magnetics without compromising rating.'
}, {
  icon: 'zap',
  name: 'Open & Varnished',
  desc: 'Cost-effective constructions for controlled indoor environments.'
}];
function Capabilities() {
  return /*#__PURE__*/React.createElement("section", {
    id: "capabilities",
    style: {
      maxWidth: MAX,
      margin: '0 auto',
      padding: '6rem var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Capabilities"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0.75rem 0 0.75rem'
    }
  }, "Every construction, one supplier"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-lg)',
      margin: 0
    }
  }, "We wind, pot, seal and test to your drawing. If it carries current, we can build it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, CONSTRUCTIONS.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.name,
    interactive: true,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--pe-yellow-a20)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 24,
    color: "#1b3153"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 0.5rem'
    }
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)'
    }
  }, c.desc)))));
}

/* ================= STATS BAND ================= */
function Stats() {
  const stats = [{
    n: '55+',
    l: 'Years building magnetics'
  }, {
    n: 'ISO 9001',
    l: 'QAS Registered · Cert. US3620'
  }, {
    n: '10k+',
    l: 'Custom part numbers shipped'
  }, {
    n: '100%',
    l: 'Electrical test coverage'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAX,
      margin: '0 auto',
      padding: '4rem var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'var(--space-8)'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: 1,
      color: 'var(--pe-yellow)'
    }
  }, s.n), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0.6rem 0 0',
      color: 'var(--text-inverse-secondary)'
    }
  }, s.l)))));
}

/* ================= QUALITY ================= */
function Quality() {
  return /*#__PURE__*/React.createElement("section", {
    id: "quality",
    style: {
      maxWidth: MAX,
      margin: '0 auto',
      padding: '6rem var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Quality & Certification"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0.75rem 0 1rem'
    }
  }, "Qualified, documented, repeatable"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-lg)'
    }
  }, "Every unit is built under an ISO 9001 quality system and electrically tested before it leaves Copiague. First-article inspection, full traceability, and RoHS documentation available on request."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '1.5rem 0 0',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, ['ISO 9001 — QAS International registered', 'First-article inspection & full traceability', 'MIL-STD environmental and electrical testing'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20,
    color: "#cc9e00",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "View Certificate"))), /*#__PURE__*/React.createElement(Card, {
    variant: "secondary",
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/iso-9001-qas.jpg",
    alt: "ISO 9001 QAS Registered Firm",
    style: {
      maxWidth: '78%',
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "accent"
  }, "ISO 9001"), /*#__PURE__*/React.createElement(Tag, {
    variant: "outline"
  }, "RoHS"), /*#__PURE__*/React.createElement(Tag, {
    variant: "outline"
  }, "ITAR Aware"))));
}

/* ================= TESTIMONIAL ================= */
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-panel)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '5rem var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(Blockquote, {
    author: "Program Manager",
    role: "Tier-1 Avionics Supplier"
  }, "Precision delivered qualified prototypes weeks ahead of schedule \u2014 and every production unit met tolerance. They are the partner we call when it has to work.")));
}

/* ================= CONTACT ================= */
function Contact() {
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      maxWidth: MAX,
      margin: '0 auto',
      padding: '6rem var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0.75rem 0 1rem'
    }
  }, "Send us your drawing"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-lg)'
    }
  }, "Tell us what you need and we'll come back with a quote \u2014 usually within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2rem',
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, [['map-pin', '1 Di Tomas Court, Copiague, NY 11726'], ['phone', '(631) 842-4900'], ['printer', 'Fax (631) 842-4904']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'center',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20,
    color: "#1b3153"
  }), t)))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 52,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--pe-yellow)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 28,
    color: "#1b3153"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, "Quote request received"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Thanks \u2014 an engineer will reply within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Acme Aerospace",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@acme.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Part / Drawing #",
    placeholder: "Optional"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '0.8rem',
      fontWeight: 500,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: '0.6rem'
    }
  }, "Construction"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "con",
    label: "Toroidal",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "con",
    label: "Hermetic"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "con",
    label: "Molded"
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Include RoHS documentation"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Request Quote"))));
}

/* ================= FOOTER ================= */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAX,
      margin: '0 auto',
      padding: '4rem var(--container-pad) 2.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-12)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-precision-electronics-white.svg",
    alt: "Precision Electronics",
    style: {
      height: 26,
      marginBottom: '1.25rem'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-inverse-secondary)',
      margin: 0
    }
  }, "The leading source for custom magnetics \u2014 prototypes thru production.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-16)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      marginBottom: '0.9rem'
    }
  }, "Company"), ['Capabilities', 'Quality', 'Industries', 'Contact'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: `#${l.toLowerCase()}`,
    style: {
      display: 'block',
      color: 'var(--text-inverse-secondary)',
      textDecoration: 'none',
      marginBottom: '0.5rem'
    }
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      marginBottom: '0.9rem'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-inverse-secondary)',
      margin: '0 0 0.5rem'
    }
  }, "1 Di Tomas Court", /*#__PURE__*/React.createElement("br", null), "Copiague, NY 11726"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-inverse-secondary)',
      margin: 0
    }
  }, "(631) 842-4900")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAX,
      margin: '0 auto',
      padding: '1.5rem var(--container-pad)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-inverse-secondary)',
      fontSize: '0.85rem'
    }
  }, "\xA9 Precision Electronics, Inc. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-inverse-secondary)',
      fontSize: '0.85rem'
    }
  }, "ISO 9001 \xB7 Cert. US3620"))));
}
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Capabilities, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Quality, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Blockquote = __ds_scope.Blockquote;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

})();
