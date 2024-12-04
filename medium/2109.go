package main

import "strings"

/*
 *   Stats:
 *   Runtime: 74ms (beats 5.71% of Go solutions)
 *   Memory: 30.15mb (beats 9.76% of Go solutions)
 */

func main() {
	addSpaces_test()
}

func addSpaces(s string, spaces []int) string {
	spaceMap := make(map[int]bool)
	for _, pos := range spaces {
		spaceMap[pos] = true
	}

	builder := strings.Builder{}
	builder.Grow(len(s) + len(spaces))

	for i := 0; i < len(s); i++ {
		if spaceMap[i] {
			builder.WriteByte(' ')
		}
		builder.WriteByte(s[i])
	}

	return builder.String()
}

func addSpaces_test() {
	println("test 1 passed:", addSpaces("abc", []int{1, 2, 3}) == "a b c")
}