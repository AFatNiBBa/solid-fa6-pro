
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `text-slash` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=light text-slash}
 * @preview ![text-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDcuODg1IDY0TDMyMi4wMjkgMTc2LjA0MUwzNDkuODEzIDE5Ny45NzdMMzgwLjczMSA2NEg1NDQuMDAxVjExMkM1NDQuMDAxIDEyMC43OTkgNTUxLjIgMTI4IDU2MC4wMDEgMTI4QzU2OC44MDEgMTI4IDU3Ni4wMDEgMTIwLjc5OSA1NzYuMDAxIDExMlY0OEM1NzYuMDAxIDM5LjE2MyA1NjguODM3IDMyIDU2MC4wMDEgMzJIMTQ0QzE0Mi43NTEgMzIgMTQxLjY0OCAzMi40NDIgMTQwLjQ4MiAzMi43MTFMMTgwLjExNSA2NEgzNDcuODg1Wk0zNTIgNDQ4SDI5Mi4xMTVMMzE3Ljk3NSAzMzUuOTQ0TDI5MC4xOTEgMzE0LjAwOEwyNTkuMjY5IDQ0OEgxOTJDMTgzLjE5OSA0NDggMTc2IDQ1NS4xOTkgMTc2IDQ2NEMxNzYgNDcyLjc5OSAxODMuMTk5IDQ4MCAxOTIgNDgwSDM1MkMzNjAuODAxIDQ4MCAzNjggNDcyLjc5OSAzNjggNDY0QzM2OCA0NTUuMTk5IDM2MC44MDEgNDQ4IDM1MiA0NDhaTTYzMy45MjMgNDgzLjQzNkwyNS45MjEgMy40MkMxOC45ODQgLTIuMDMzIDguOTIxIC0wLjgzIDMuNDM3IDYuMDYxQy0yLjAzMiAxMi45OTggLTAuODQ1IDIzLjA2MSA2LjA3NyAyOC41NDVMNjE0LjA3OSA1MDguNTYzQzYxNy4wMTYgNTEwLjg3NSA2MjAuNTE2IDUxMiA2MjMuOTg1IDUxMkM2MjguNzIgNTEyIDYzMy40MDcgNTA5LjkwNiA2MzYuNTYzIDUwNS45MjJDNjQyLjAzMiA0OTguOTg0IDY0MC44NDUgNDg4LjkyIDYzMy45MjMgNDgzLjQzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TextSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M347.885 64L322.029 176.041L349.813 197.977L380.731 64H544.001V112C544.001 120.799 551.2 128 560.001 128C568.801 128 576.001 120.799 576.001 112V48C576.001 39.163 568.837 32 560.001 32H144C142.751 32 141.648 32.442 140.482 32.711L180.115 64H347.885ZM352 448H292.115L317.975 335.944L290.191 314.008L259.269 448H192C183.199 448 176 455.199 176 464C176 472.799 183.199 480 192 480H352C360.801 480 368 472.799 368 464C368 455.199 360.801 448 352 448ZM633.923 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.079 508.563C617.016 510.875 620.516 512 623.985 512C628.72 512 633.407 509.906 636.563 505.922C642.032 498.984 640.845 488.92 633.923 483.436Z" />
        </Icon>
    </>
}