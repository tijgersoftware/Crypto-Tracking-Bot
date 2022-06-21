import db from "../db"


describe("db.createTable", () => {
    test("0", async () => {
        await db.createTable()
    })
})


describe("db.insertData", () => {
    test("0", async () => {
        let object = [[false, true, true, false], [false, false, true, true], [true, false, true, false], [false, true, true, true]]
        await db.insertData({ pair: "This is a Text", timestamp: 18, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 1, fetchInterval: 100000, database: "mongo", oscillation: false, refresh: true, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("1", async () => {
        let object = [[true, false, true, false], [true, true, false, true], [true, false, false, true], [true, false, true, true]]
        await db.insertData({ pair: "foo bar", timestamp: 35, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: -100, fetchInterval: 3, database: "mongo", oscillation: true, refresh: true, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("2", async () => {
        let object = [[true, true, true, false], [false, false, true, false], [true, false, false, false], [true, false, true, true]]
        await db.insertData({ pair: "foo bar", timestamp: 5, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: -1, fetchInterval: 2, database: "mysql", oscillation: false, refresh: true, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("3", async () => {
        let object = [[false, false, false, true], [false, true, true, true], [false, true, true, false], [false, false, true, false]]
        await db.insertData({ pair: "Foo bar", timestamp: 25, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 1, fetchInterval: 3600, database: "sqlite", oscillation: true, refresh: false, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("4", async () => {
        let object = [[false, false, false, true], [true, true, false, true], [false, false, false, false], [true, true, false, true]]
        await db.insertData({ pair: "This is a Text", timestamp: 18, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: -100, fetchInterval: 2, database: "mysql", oscillation: true, refresh: true, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("5", async () => {
        await db.insertData({ pair: "", timestamp: -Infinity, initial_value: "", rate: -Infinity, fetchInterval: -Infinity, database: "", oscillation: true, refresh: true, updateAllPairs: [], pairsFile: "" })
    })
})


describe("db.createTable", () => {
    test("0", async () => {
        await db.createTable()
    })
})


describe("db.insertData", () => {
    test("0", async () => {
        let object = [[false, true, true, false], [true, false, true, false], [true, false, true, true], [false, true, false, false]]
        await db.insertData({ pair: "Hello, world!", timestamp: 25, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 0, fetchInterval: 1, database: "mysql", oscillation: true, refresh: false, updateAllPairs: object, pairsFile: "jpeg" })
    })

    test("1", async () => {
        let object = [[true, true, false, false], [false, true, false, true], [false, true, false, true], [false, true, false, false]]
        await db.insertData({ pair: "Hello, world!", timestamp: 18, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 100, fetchInterval: 0, database: "sqlite", oscillation: true, refresh: false, updateAllPairs: object, pairsFile: "mpe" })
    })

    test("2", async () => {
        let object = [[false, false, false, true], [true, true, false, false], [false, false, false, false], [true, false, false, true]]
        await db.insertData({ pair: "foo bar", timestamp: 5, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 100, fetchInterval: 0, database: "sqlite", oscillation: false, refresh: true, updateAllPairs: object, pairsFile: "mpe" })
    })

    test("3", async () => {
        let object = [[true, false, false, false], [true, true, false, false], [false, false, true, false], [false, true, false, true]]
        await db.insertData({ pair: "foo bar", timestamp: 5, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: -100, fetchInterval: 12, database: "mongo", oscillation: true, refresh: false, updateAllPairs: object, pairsFile: "m2v" })
    })

    test("4", async () => {
        let object = [[true, true, false, false], [true, true, true, false], [true, true, false, true], [false, true, false, true]]
        await db.insertData({ pair: "This is a Text", timestamp: 75, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: -100, fetchInterval: 1, database: "sqlite", oscillation: false, refresh: false, updateAllPairs: object, pairsFile: "mpe" })
    })

    test("5", async () => {
        await db.insertData({ pair: "", timestamp: NaN, initial_value: "", rate: NaN, fetchInterval: NaN, database: "", oscillation: false, refresh: true, updateAllPairs: [], pairsFile: "" })
    })
})


describe("db.createTable", () => {
    test("0", async () => {
        await db.createTable()
    })
})


describe("db.insertData", () => {
    test("0", async () => {
        let object = [[true, false, false, true], [true, false, true, false], [false, false, false, false], [true, true, false, false]]
        await db.insertData({ pair: "This is a Text", timestamp: 25, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 1, fetchInterval: 10, database: "mysql", oscillation: false, refresh: true, updateAllPairs: object, pairsFile: "jpeg" })
    })

    test("1", async () => {
        let object = [[false, false, false, true], [true, true, true, true], [false, true, false, true], [false, false, true, true]]
        await db.insertData({ pair: "This is a Text", timestamp: 25, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: -100, fetchInterval: 7, database: "mongo", oscillation: false, refresh: true, updateAllPairs: object, pairsFile: "jpeg" })
    })

    test("2", async () => {
        let object = [[false, true, true, false], [true, false, true, true], [true, true, false, true], [true, false, true, false]]
        await db.insertData({ pair: "This is a Text", timestamp: 75, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 0, fetchInterval: 0.5, database: "sqlite", oscillation: false, refresh: true, updateAllPairs: object, pairsFile: "jpeg" })
    })

    test("3", async () => {
        let object = [[true, false, true, true], [true, false, true, true], [true, false, false, true], [true, false, true, false]]
        await db.insertData({ pair: "Hello, world!", timestamp: 75, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 100, fetchInterval: 3, database: "postgres", oscillation: false, refresh: false, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("4", async () => {
        let object = [[false, true, true, true], [true, false, false, true], [true, true, false, false], [false, true, true, true]]
        await db.insertData({ pair: "Foo bar", timestamp: 35, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 0, fetchInterval: 2, database: "mysql", oscillation: true, refresh: false, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("5", async () => {
        await db.insertData({ pair: "", timestamp: NaN, initial_value: "", rate: NaN, fetchInterval: NaN, database: "", oscillation: false, refresh: false, updateAllPairs: [], pairsFile: "" })
    })
})


describe("db.createTable", () => {
    test("0", async () => {
        await db.createTable()
    })
})


describe("db.insertData", () => {
    test("0", async () => {
        let object = [[false, false, false, false], [false, false, false, true], [true, false, false, false], [true, true, false, false]]
        await db.insertData({ pair: "Hello, world!", timestamp: 35, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 100, fetchInterval: 0.5, database: "mongo", oscillation: true, refresh: false, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("1", async () => {
        let object = [[true, false, true, true], [true, true, true, false], [false, false, true, false], [true, false, false, true]]
        await db.insertData({ pair: "This is a Text", timestamp: 25, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 100, fetchInterval: 60, database: "mongo", oscillation: true, refresh: false, updateAllPairs: object, pairsFile: "jpeg" })
    })

    test("2", async () => {
        let object = [[true, true, false, true], [true, false, true, true], [false, false, false, true], [false, true, true, false]]
        await db.insertData({ pair: "Hello, world!", timestamp: 75, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 1, fetchInterval: 14, database: "mysql", oscillation: true, refresh: false, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("3", async () => {
        let object = [[true, false, true, false], [false, true, false, false], [false, true, true, false], [true, false, false, true]]
        await db.insertData({ pair: "This is a Text", timestamp: 75, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 100, fetchInterval: 4, database: "sqlite", oscillation: true, refresh: true, updateAllPairs: object, pairsFile: "jpeg" })
    })

    test("4", async () => {
        let object = [[false, true, true, false], [false, true, false, true], [true, false, true, false], [false, true, true, true]]
        await db.insertData({ pair: "Foo bar", timestamp: 18, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 1, fetchInterval: 0.5, database: "sqlite", oscillation: true, refresh: true, updateAllPairs: object, pairsFile: "mpe" })
    })

    test("5", async () => {
        await db.insertData({ pair: "", timestamp: Infinity, initial_value: "", rate: Infinity, fetchInterval: Infinity, database: "", oscillation: false, refresh: false, updateAllPairs: [], pairsFile: "" })
    })
})


describe("db.createTable", () => {
    test("0", async () => {
        await db.createTable()
    })
})


describe("db.insertData", () => {
    test("0", async () => {
        let object = [[false, false, true, true], [true, false, true, false], [false, false, false, true], [false, true, true, false]]
        await db.insertData({ pair: "Foo bar", timestamp: 75, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 1, fetchInterval: 60, database: "mysql", oscillation: false, refresh: false, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("1", async () => {
        let object = [[false, true, true, true], [false, true, false, false], [true, true, false, false], [false, false, true, true]]
        await db.insertData({ pair: "foo bar", timestamp: 75, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 1, fetchInterval: 100000, database: "mysql", oscillation: true, refresh: false, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("2", async () => {
        let object = [[false, false, false, true], [false, true, true, true], [true, true, true, true], [false, true, true, false]]
        await db.insertData({ pair: "foo bar", timestamp: 18, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 1, fetchInterval: 1234, database: "mysql", oscillation: false, refresh: true, updateAllPairs: object, pairsFile: "m2v" })
    })

    test("3", async () => {
        let object = [[false, true, true, false], [false, false, true, false], [false, false, true, true], [false, true, false, true]]
        await db.insertData({ pair: "This is a Text", timestamp: 25, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 1, fetchInterval: 100000, database: "sqlite", oscillation: true, refresh: true, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("4", async () => {
        let object = [[true, false, false, true], [false, false, true, true], [false, true, true, true], [true, false, false, false]]
        await db.insertData({ pair: "Foo bar", timestamp: 5, initial_value: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", rate: 1, fetchInterval: 60, database: "sqlite", oscillation: false, refresh: false, updateAllPairs: object, pairsFile: "pdf" })
    })

    test("5", async () => {
        await db.insertData({ pair: "", timestamp: NaN, initial_value: "", rate: NaN, fetchInterval: NaN, database: "", oscillation: false, refresh: true, updateAllPairs: [], pairsFile: "" })
    })
})
