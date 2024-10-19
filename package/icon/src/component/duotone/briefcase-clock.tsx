
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `briefcase-clock` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-clock?s=duotone briefcase-clock}
 * @preview ![briefcase-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5NiAyMjRDNDE2LjM3NSAyMjQgMzUyIDI4OC4zNzUgMzUyIDM2OFM0MTYuMzc1IDUxMiA0OTYgNTEyUzY0MCA0NDcuNjI1IDY0MCAzNjhTNTc1LjYyNSAyMjQgNDk2IDIyNFpNNTQ0IDM4NEg0ODkuNzVDNDg0LjM3NSAzODQgNDgwIDM3OS42MjUgNDgwIDM3NC4yNVYzMDRDNDgwIDI5NS4xNjIgNDg3LjE2NCAyODggNDk2IDI4OEM1MDQuODM4IDI4OCA1MTIgMjk1LjE2MiA1MTIgMzA0VjM1Mkg1NDRDNTUyLjgzOCAzNTIgNTYwIDM1OS4xNjIgNTYwIDM2OEM1NjAgMzc2LjgzNiA1NTIuODM4IDM4NCA1NDQgMzg0Wk0zMjAuOTc1IDM1MkgyMDhDMTk5LjE1NiAzNTIgMTkyIDM0NC44NDQgMTkyIDMzNlYyODhIMFY0MzJDMCA0NTcuNTk0IDIyLjQwNiA0ODAgNDggNDgwSDM2MC4yMzRDMzM1LjEwMiA0NDkuNTY4IDMyMCA0MTAuNTQ5IDMyMCAzNjhDMzIwIDM2Mi41ODIgMzIwLjQ4OCAzNTcuMjg5IDMyMC45NzUgMzUyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01NDQgMzUySDUxMlYzMDRDNTEyIDI5NS4xNjIgNTA0LjgzOCAyODggNDk2IDI4OEM0ODcuMTY0IDI4OCA0ODAgMjk1LjE2MiA0ODAgMzA0VjM3NC4yNUM0ODAgMzc5LjYyNSA0ODQuMzc1IDM4NCA0ODkuNzUgMzg0SDU0NEM1NTIuODM4IDM4NCA1NjAgMzc2LjgzNiA1NjAgMzY4QzU2MCAzNTkuMTYyIDU1Mi44MzggMzUyIDU0NCAzNTJaTTUxMiAxOTIuODA3VjE0NEM1MTIgMTE4LjQwNiA0ODkuNTk0IDk2IDQ2NCA5NkgzODRWNDhDMzg0IDIyLjQwNiAzNjEuNTk0IDAgMzM2IDBIMTc2QzE1MC40MDYgMCAxMjggMjIuNDA2IDEyOCA0OFY5Nkg0OEMyMi40MDYgOTYgMCAxMTguNDA2IDAgMTQ0VjI4OEgzMzkuMzY3QzM2OC41MTQgMjMxLjA1NSA0MjcuNjM3IDE5MiA0OTYgMTkyQzUwMS40MDIgMTkyIDUwNi43MjMgMTkyLjMzIDUxMiAxOTIuODA3Wk0zMzYgOTZIMTc2VjQ4SDMzNlY5NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BriefcaseClock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M496 224C416.375 224 352 288.375 352 368S416.375 512 496 512S640 447.625 640 368S575.625 224 496 224ZM544 384H489.75C484.375 384 480 379.625 480 374.25V304C480 295.162 487.164 288 496 288C504.838 288 512 295.162 512 304V352H544C552.838 352 560 359.162 560 368C560 376.836 552.838 384 544 384ZM320.975 352H208C199.156 352 192 344.844 192 336V288H0V432C0 457.594 22.406 480 48 480H360.234C335.102 449.568 320 410.549 320 368C320 362.582 320.488 357.289 320.975 352Z" />
            <path d="M544 352H512V304C512 295.162 504.838 288 496 288C487.164 288 480 295.162 480 304V374.25C480 379.625 484.375 384 489.75 384H544C552.838 384 560 376.836 560 368C560 359.162 552.838 352 544 352ZM512 192.807V144C512 118.406 489.594 96 464 96H384V48C384 22.406 361.594 0 336 0H176C150.406 0 128 22.406 128 48V96H48C22.406 96 0 118.406 0 144V288H339.367C368.514 231.055 427.637 192 496 192C501.402 192 506.723 192.33 512 192.807ZM336 96H176V48H336V96Z" />
        </Icon>
    </>
}