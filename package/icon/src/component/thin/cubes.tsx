
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cubes` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cubes?s=thin cubes}
 * @preview ![cubes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAuOTg0IDI2Ni4wMDhMNDMyIDIxNS44NDFWNzAuMTM4QzQzMiA2MC41MTQgNDI2LjIxOSA1Mi4wNjEgNDE3LjI4MSA0OC42MDhMMjk2LjQwNiAxLjU5NEMyOTMuNjg4IDAuNTMxIDI5MC44NTIgMCAyODguMDE2IDBTMjgyLjM0NCAwLjUzMSAyNzkuNjI1IDEuNTk0TDE1OC43NSA0OC42MDhDMTQ5Ljc4MSA1Mi4wNjEgMTQ0IDYwLjUxNCAxNDQgNzAuMTM4VjIxNS44NDFMMTUuMDE2IDI2Ni4wMDhDNS44OTEgMjY5LjU1NCAwIDI3OC4xNzkgMCAyODcuOTZWNDQxLjI1MkMwIDQ1MC45MzkgNS44MTIgNDU5LjUzMyAxNC43ODEgNDYzLjExMUwxMjkuNDY5IDUwOS4xMjVDMTM0LjIxOSA1MTEuMDMxIDEzOS4yMTkgNTEyIDE0NC4yODEgNTEyQzE0OS4xMjUgNTEyIDE1My45NjkgNTExLjEyNSAxNTguNjg4IDUwOS4zNDRMMjg4IDQ1Ni42NDRMNDE3LjMxMyA1MDkuMzQ0QzQyMi4wMzEgNTExLjEyNSA0MjYuODc1IDUxMiA0MzEuNzE5IDUxMkM0MzYuNzgxIDUxMiA0NDEuNzgxIDUxMS4wMzEgNDQ2LjUzMSA1MDkuMTI1TDU2MS4yMTkgNDYzLjExMUM1NzAuMTg4IDQ1OS41MzMgNTc2IDQ1MC45MzkgNTc2IDQ0MS4yNTJWMjg3Ljk2QzU3NiAyNzguMTc5IDU3MC4xMDkgMjY5LjU1NCA1NjAuOTg0IDI2Ni4wMDhaTTQxNiAyMTYuNzlDNDE2IDIxNy42OTMgNDE1LjU1NyAyMTguNDQzIDQxNS4yNDYgMjE5LjI0NUwyOTYgMjY1LjYxOVYxMTguMTU3TDQxNiA3MS40OVYyMTYuNzlaTTI4NS40MzggMTYuNDk5QzI4NS40MzggMTYuNDk5IDI4NS40MzggMTYuNDk5IDI4NS40NjkgMTYuNDk5QzI4Ni4yNSAxNi4xNzEgMjg3LjEyNSAxNi4wMTUgMjg4IDE2LjAxNVMyODkuNzUgMTYuMTcxIDI5MC41NjMgMTYuNDk5TDQwMS45MzQgNTkuNzk1TDI4OCAxMDQuMTA2TDE3NC4wODIgNTkuODAxTDI4NS40MzggMTYuNDk5Wk0xNjAgNzEuNDlMMjgwIDExOC4xNTdWMjY1LjYxOUwxNjAuNzU0IDIxOS4yNDVDMTYwLjQ0MyAyMTguNDQzIDE2MCAyMTcuNjkzIDE2MCAyMTYuNzlWNzEuNDlaTTEzNiA0OTQuMzk5QzEzNS44MDkgNDk0LjMyOSAxMzUuNTk4IDQ5NC4zNTggMTM1LjQwNiA0OTQuMjgyTDIwLjczNCA0NDguMjY4QzE3Ljg1OSA0NDcuMTExIDE2IDQ0NC4zNjEgMTYgNDQxLjI1MlYyOTEuOTQ2TDEzNiAzNDEuMzUxVjQ5NC4zOTlaTTE0NC4wOTQgMzI3LjM5NkwyNi4xNiAyNzguODM5TDE0OCAyMzEuNDQ2TDI2OS4zOTUgMjc4LjY1OUwxNDQuMDk0IDMyNy4zOTZaTTE1Mi44NDQgNDk0LjQ1NEMxNTIuNTcgNDk0LjU1NSAxNTIuMjc1IDQ5NC41MSAxNTIgNDk0LjYwMlYzNDEuNDc4TDI4MCAyOTEuNzAyVjQ0Mi42MjdMMTUyLjg0NCA0OTQuNDU0Wk00MjQgNDk0LjYwMkM0MjMuNzI1IDQ5NC41MSA0MjMuNDMgNDk0LjU1NSA0MjMuMTU2IDQ5NC40NTRMMjk2IDQ0Mi42MjdWMjkxLjcwMkw0MjQgMzQxLjQ3OFY0OTQuNjAyWk0zMDYuNjA1IDI3OC42NTlMNDI4IDIzMS40NDZMNTQ5Ljg0IDI3OC44MzlMNDMxLjkwNiAzMjcuMzk2TDMwNi42MDUgMjc4LjY1OVpNNTYwIDQ0MS4yNTJDNTYwIDQ0NC4zNjEgNTU4LjE0MSA0NDcuMTExIDU1NS4yNjYgNDQ4LjI2OEw0NDAuNTk0IDQ5NC4yODJDNDQwLjQwMiA0OTQuMzU4IDQ0MC4xOTEgNDk0LjMyOSA0NDAgNDk0LjM5OVYzNDEuMzUxTDU2MCAyOTEuOTQ2VjQ0MS4yNTJaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function Cubes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M560.984 266.008L432 215.841V70.138C432 60.514 426.219 52.061 417.281 48.608L296.406 1.594C293.688 0.531 290.852 0 288.016 0S282.344 0.531 279.625 1.594L158.75 48.608C149.781 52.061 144 60.514 144 70.138V215.841L15.016 266.008C5.891 269.554 0 278.179 0 287.96V441.252C0 450.939 5.812 459.533 14.781 463.111L129.469 509.125C134.219 511.031 139.219 512 144.281 512C149.125 512 153.969 511.125 158.688 509.344L288 456.644L417.313 509.344C422.031 511.125 426.875 512 431.719 512C436.781 512 441.781 511.031 446.531 509.125L561.219 463.111C570.188 459.533 576 450.939 576 441.252V287.96C576 278.179 570.109 269.554 560.984 266.008ZM416 216.79C416 217.693 415.557 218.443 415.246 219.245L296 265.619V118.157L416 71.49V216.79ZM285.438 16.499C285.438 16.499 285.438 16.499 285.469 16.499C286.25 16.171 287.125 16.015 288 16.015S289.75 16.171 290.563 16.499L401.934 59.795L288 104.106L174.082 59.801L285.438 16.499ZM160 71.49L280 118.157V265.619L160.754 219.245C160.443 218.443 160 217.693 160 216.79V71.49ZM136 494.399C135.809 494.329 135.598 494.358 135.406 494.282L20.734 448.268C17.859 447.111 16 444.361 16 441.252V291.946L136 341.351V494.399ZM144.094 327.396L26.16 278.839L148 231.446L269.395 278.659L144.094 327.396ZM152.844 494.454C152.57 494.555 152.275 494.51 152 494.602V341.478L280 291.702V442.627L152.844 494.454ZM424 494.602C423.725 494.51 423.43 494.555 423.156 494.454L296 442.627V291.702L424 341.478V494.602ZM306.605 278.659L428 231.446L549.84 278.839L431.906 327.396L306.605 278.659ZM560 441.252C560 444.361 558.141 447.111 555.266 448.268L440.594 494.282C440.402 494.358 440.191 494.329 440 494.399V341.351L560 291.946V441.252Z " />
        </Icon>
    </>
}