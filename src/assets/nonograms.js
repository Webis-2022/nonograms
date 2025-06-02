/* eslint-disable prettier/prettier */
export const nonograms = {
  '5x5': [
    {
      description: 'Snake',
      columnHints: [
        ['3', '1'],
        ['1', '1', '1'],
        ['1', '1', '1'],
        ['1', '1', '1'],
        ['1', '3']
      ],
      rowHints: [
        ['5'],
        ['1'],
        ['5'],
        ['1'],
        ['5']
      ],
      answers: [
        [true, true, true, true, true],
        [true, false, false, false, false],
        [true, true, true, true, true],
        [false, false, false, false, true],
        [true, true, true, true, true]
      ]
    },
    {
      description: 'Car',
      columnHints: [
        ['', ''],
        ['3'],
        ['5'],
        ['5'],
        ['1', '1']
      ],
      rowHints: [
        ['2'],
        ['4'],
        ['3'],
        ['4'],
        ['2']
      ],
      answers: [
        [false, false, false, false, false],
        [false, true, true, true, false],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [false, true, false, true, false]
      ]
    },
    {
      description: 'Airplane',
      columnHints: [
        ['1'],
        ['3'],
        ['5'],
        ['1'],
        ['3']
      ],
      rowHints: [
        ['1'],
        ['2', '1'],
        ['5'],
        ['2', '1'],
        ['1']
      ],
      answers: [
        [false, false, true, false, false],
        [false, true, true, true, false],
        [true, true, true, true, true],
        [false, false, true, false, false],
        [false, true, true, true, false]
      ]
    },
    {
      description: 'Dog',
      columnHints: [
        ['1'],
        ['1', '3'],
        ['3'],
        ['1', '1'],
        ['1', '1']
      ],
      rowHints: [
        ['1'],
        ['3'],
        ['2'],
        ['5'],
        ['1']
      ],
      answers: [
        [false, false, false, true, false],
        [true, false, true, true, true],
        [false, true, true, true, false],
        [false, true, false, true, false],
        [false, true, false, true, false]
      ]
    },
    {
      description: 'Snowflake',
      columnHints: [
        ['1', '1', '1'],
        ['3'],
        ['2', '2'],
        ['3'],
        ['1', '1', '1']
      ],
      rowHints: [
        ['1', '1', '1'],
        ['3'],
        ['2', '2'],
        ['3'],
        ['1', '1', '1']
      ],
      answers: [
        [true, false, true, false, true],
        [false, true, true, true, false],
        [true, true, false, true, false],
        [false, true, true, true, false],
        [true, false, true, false, true]
      ]
    }
  ],
  '10x10': [
    {
      description: 'Home',
      columnHints: [
        ['6'],
        ['7'],
        ['8'],
        ['9'],
        ['5', '3'],
        ['5', '3'],
        ['9'],
        ['8'],
        ['7'],
        ['6']
      ],
      rowHints: [
        ['2'],
        ['4'],
        ['6'],
        ['8'],
        ['10'],
        ['4', '4'],
        ['4', '4'],
        ['10'],
        ['10'],
        ['10']
      ],
      answers: [
        [false, false, false, false, true, true, false, false, false, false],
        [false, false, false, true, true, true, true, false, false, false],
        [false, false, true, true, true, true, true, true, false, false],
        [false, true, true, true, true, true, true, true, true, false],
        [true, true, true, true, true, true, true, true, true, true],
        [true, true, true, true, false, false, true, true, true, true],
        [true, true, true, true, false, false, true, true, true, true],
        [true, true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true, true],
      ]
    },
    {
      description: 'TV',
      columnHints: [
        ['7'],
        ['1', '1', '4'],
        ['1', '7'],
        ['3', '2'],
        ['1', '1'],
        ['1', '1'],
        ['2', '1'],
        ['1', '1', '1'],
        ['2', '3'],
        ['7']
      ],
      rowHints: [
        ['1', '1'],
        ['1', '1'],
        ['10'],
        ['1', '2', '2'],
        ['3', '1'],
        ['1', '1', '1'],
        ['3', '1'],
        ['4', '2'],
        ['10'],
        ['1', '1']
      ],
      answers: [
        [false, false, true, false, false, false, false, true, false, false],
        [false, false, false, true, false, false, true, false, false, false],
        [true, true, true, true, true, true, true, true, true, true],
        [true, false, true, true, false, false, false, false, true, true],
        [true, true, true, false, false, false, false, false, false, true],
        [true, false, true, false, false, false, false, false, false, true],
        [true, true, true, false, false, false, false, false, false, true],
        [true, true, true, true, false, false, false, false, true, true],
        [true, true, true, true, true, true, true, true, true, true],
        [false, true, false, false, false, false, false, false, true, false],
      ]
    },
    {
      description: 'Football',
      columnHints: [
        ['1', '1', '6'],
        ['10'],
        ['4'],
        ['4'],
        ['4'],
        ['4'],
        ['2', '4'],
        ['4', '2'],
        ['1', '2'],
        ['2']
      ],
      rowHints: [
        ['2', '2'],
        ['1', '2', '1'],
        ['2', '4'],
        ['1', '2'],
        ['2'],
        ['3'],
        ['7'],
        ['8'],
        ['8'],
        ['2', '4']
      ],
      answers: [
        [true, true, false, false, false, false, false, true, true, false],
        [false, true, false, false, false, false, true, true, false, true],
        [true, true, false, false, false, false, true, true, true, true],
        [false, true, false, false, false, false, false, true, true, false],
        [true, true, false, false, false, false, false, false, false, false],
        [true, true, true, false, false, false, false, false, false, false],
        [true, true, true, true, true, true, true, false, false, false],
        [true, true, true, true, true, true, true, true, false, false],
        [true, true, true, true, true, true, true, true, false, false],
        [true, true, false, true, true, true, true, false, false, false],
      ]
    },
    {
      description: 'Tree',
      columnHints: [
        ['3', '1'],
        ['5', '2'],
        ['3', '2', '1'],
        ['4', '1', '1'],
        ['10'],
        ['1', '7'],
        ['3', '1', '1', '1'],
        ['3', '1', '1'],
        ['4', '1'],
        ['2', '2']
      ],
      rowHints: [
        ['6'],
        ['4', '3'],
        ['5', '4'],
        ['2', '3', '2'],
        ['3', '5'],
        ['5'],
        ['3'],
        ['2'],
        ['1', '2', '1'],
        ['10']
      ],
      answers: [
        [false, false, true, true, true, true, true, true, false, false],
        [false, true, true, true, true, false, true, true, true, false],
        [true, true, true, true, true, false, true, true, true, true],
        [true, true, false, true, true, true, false, false, true, true],
        [true, true, true, false, true, true, true, true, true, false],
        [false, true, true, true, true, true, false, false, false, false],
        [false, false, false, false, true, true, true, false, false, false],
        [false, false, false, false, true, true, false, false, false, false],
        [false, true, false, false, true, true, false, false, false, true],
        [true, true, true, true, true, true, true, true, true, true],
      ]
    },
    {
      description: 'Mouse',
      columnHints: [
        ['3'],
        ['2', '1'],
        ['1', '1', '5'],
        ['1', '8'],
        ['2', '6'],
        ['3', '4'],
        ['2', '6'],
        ['1', '8'],
        ['1', '1', '5'],
        ['2', '3']
      ],
      rowHints: [
        ['2', '2'],
        ['1', '1', '1', '1'],
        ['1', '5', '1'],
        ['2', '1', '2'],
        ['5'],
        ['3', '3'],
        ['1', '8'],
        ['1', '8'],
        ['1', '8'],
        ['8']
      ],
      answers: [
        [false, false, true, true, false, false, false, true, true, false],
        [false, true, false, false, true, false, true, false, false, true],
        [false, true, false, true, true, true, true, true, false, true],
        [false, false, true, true, false, true, false, true, true, false],
        [false, false, false, true, true, true, true, true, false, false],
        [false, false, true, true, true, false, true, true, true, false],
        [true, false, true, true, true, true, true, true, true, true],
        [true, false, true, true, true, true, true, true, true, true],
        [true, false, true, true, true, true, true, true, true, true],
        [false, true, true, true, true, true, true, true, true, false],
      ]
    }
  ],
  '15x15': [
    {
      description: 'Spades',
      columnHints: [
        ['4'],
        ['7'],
        ['8'],
        ['9'],
        ['10'],
        ['10', '1'],
        ['10', '2'],
        ['15'],
        ['10', '2'],
        ['10', '1'],
        ['10'],
        ['9'],
        ['8'],
        ['7'],
        ['4'],
      ],
      rowHints: [
        ['1'],
        ['3'],
        ['5'],
        ['7'],
        ['9'],
        ['11'],
        ['13'],
        ['13'],
        ['15'],
        ['15'],
        ['15'],
        ['6'],
        ['4'],
        ['3'],
        ['5']
      ],
      answers: [
        [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, true, true, true, false, false, false, false, false, false],
        [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false],
        [false, false, false, false, true, true, true, true, true, true, true, false, false, false, false],
        [false, false, false, true, true, true, true, true, true, true, true, true, false, false, false],
        [false, false, true, true, true, true, true, true, true, true, true, true, true, false, false],
        [false, true, true, true, true, true, true, true, true, true, true, true, true, true, false],
        [false, true, true, true, true, true, true, true, true, true, true, true, true, true, false],
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, false, true, false, true, true, true, true, true, true],
        [false, true, true, true, true, false, false, true, false, false, true, true, true, true, false],
        [false, false, false, false, false, false, true, true, true, false, false, false, false, false, false],
        [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false],
      ]
    },
    {
      description: 'Sun',
      columnHints: [
        ['15'],
        ['7', '7'],
        ['2', '4', '4', '2'],
        ['3', '7', '3'],
        ['5', '5'],
        ['4', '4'],
        ['4', '1', '1', '4'],
        ['1', '1', '1', '1', '1'],
        ['4', '1', '1', '4'],
        ['4', '4'],
        ['5', '5'],
        ['3', '7', '3'],
        ['2', '4', '4', '2'],
        ['7', '7'],
        ['15'],
      ],
      rowHints: [
        ['15'],
        ['7', '7'],
        ['2', '4', '4', '2'],
        ['3', '7', '3'],
        ['5', '5'],
        ['4', '4'],
        ['4', '1', '1', '4'],
        ['1', '1', '1', '1'],
        ['4', '4'],
        ['4', '3', '4'],
        ['5', '5'],
        ['3', '7', '3'],
        ['2', '4', '4', '2'],
        ['7', '7'],
        ['15']
      ],
      answers: [
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, false, true, true, true, true, true, true, true],
        [true, true, false, true, true, true, true, false, true, true, true, true, false, true, true],
        [true, true, true, false, true, true, true, true, true, true, true, false, true, true, true],
        [true, true, true, true, true, false, false, false, false, false, true, true, true, true, true],
        [true, true, true, true, false, false, false, false, false, false, false, true, true, true, true],
        [true, true, true, true, false, false, true, false, true, false, false, true, true, true, true],
        [true, false, false, true, false, false, false, false, false, false, false, true, false, false, true],
        [true, true, true, true, false, false, false, false, false, false, false, true, true, true, true],
        [true, true, true, true, false, false, true, true, true, false, false, true, true, true, true],
        [true, true, true, true, true, false, false, false, false, false, true, true, true, true, true],
        [true, true, true, false, true, true, true, true, true, true, true, false, true, true, true],
        [true, true, false, true, true, true, true, false, true, true, true, true, false, true, true],
        [true, true, true, true, true, true, true, false, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      ]
    },
    {
      description: 'Church',
      columnHints: [
        ['15'],
        ['8'],
        ['7', '1'],
        ['6', '1', '4'],
        ['5', '1'],
        ['5', '1'],
        ['1', '2', '3'],
        ['1', '4'],
        ['1', '2', '3'],
        ['5', '1'],
        ['5', '1'],
        ['6', '1', '4'],
        ['7', '1'],
        ['8'],
        ['15'],
      ],
      rowHints: [
        ['7', '7'],
        ['6', '6'],
        ['7', '7'],
        ['7', '7'],
        ['6', '6'],
        ['4', '4'],
        ['3', '3'],
        ['2', '2'],
        ['1', '1'],
        ['1', '1', '1', '1'],
        ['1', '3', '1', '3', '1'],
        ['1', '1', '3', '1', '1'],
        ['1', '1', '3', '1', '1'],
        ['1', '3', '1'],
        ['1', '1']
      ],
      answers: [
        [true, true, true, true, true, true, true, false, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, false, false, false, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, false, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, false, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, false, false, false, true, true, true, true, true, true],
        [true, true, true, true, false, false, false, false, false, false, false, true, true, true, true],
        [true, true, true, false, false, false, false, false, false, false, false, false, true, true, true],
        [true, true, false, false, false, false, false, false, false, false, false, false, false, true, true],
        [true, false, false, false, false, false, false, false, false, false, false, false, false, false, true],
        [true, false, false, true, false, false, false, false, false, false, false, true, false, false, true],
        [true, false, true, true, true, false, false, true, false, false, true, true, true, false, true],
        [true, false, false, true, false, false, true, true, true, false, false, true, false, false, true],
        [true, false, false, true, false, false, true, true, true, false, false, true, false, false, true],
        [true, false, false, false, false, false, true, true, true, false, false, false, false, false, true],
        [true, false, false, false, false, false, false, false, false, false, false, false, false, false, true]
      ]
    },
    {
      description: 'Lamp',
      columnHints: [
        ['15'],
        ['2', '6', '5'],
        ['1', '13'],
        ['3', '8'],
        ['2', '6'],
        ['1', '1', '3'],
        ['1', '1'],
        ['1'],
        ['1', '1'],
        ['1', '1', '1', '3'],
        ['2', '1', '6'],
        ['3', '8'],
        ['1', '13'],
        ['2', '12'],
        ['15'],
      ],
      rowHints: [
        ['15'],
        ['2', '2', '2', '2'],
        ['1', '2', '1', '2', '1'],
        ['3', '1', '3'],
        ['3', '3'],
        ['3', '3'],
        ['3', '3'],
        ['4', '4'],
        ['4', '4'],
        ['1', '3', '5'],
        ['6', '6'],
        ['5', '5'],
        ['6', '6'],
        ['6', '6'],
        ['7', '7']
      ],
      answers: [
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        [true, true, false, true, true, false, false, false, false, false, true, true, false, true, true],
        [true, false, true, true, false, false, false, false, false, true, false, true, true, false, true],
        [true, true, true, false, false, false, false, false, false, false, true, false, true, true, true],
        [true, true, true, false, false, false, false, false, false, false, false, false, true, true, true],
        [true, true, true, false, false, false, false, false, false, false, false, false, true, true, true],
        [true, true, true, false, false, false, false, false, false, false, false, false, true, true, true],
        [true, true, true, true, false, false, false, false, false, false, false, true, true, true, true],
        [true, true, true, true, false, false, false, false, false, false, false, true, true, true, true],
        [true, false, true, true, true, false, false, false, false, false, true, true, true, true, true],
        [true, true, true, true, true, true, false, false, false, true, true, true, true, true, true],
        [true, true, true, true, true, false, false, false, false, false, true, true, true, true, true],
        [true, true, true, true, true, true, false, false, false, true, true, true, true, true, true],
        [true, true, true, true, true, true, false, false, false, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, false, true, true, true, true, true, true, true]

      ]
    },
    {
      description: 'Swan',
      columnHints: [
        ['4', '6', '3'],
        ['5', '6', '2'],
        ['5', '4', '1'],
        ['4', '1', '1', '1'],
        ['4', '1', '1', '1', '1'],
        ['5', '1', '1', '1', '1'],
        ['5', '1', '1', '1', '1'],
        ['5', '1', '1', '1', '1'],
        ['6', '1', '1', '1'],
        ['1', '4', '1', '1', '1'],
        ['1', '3', '1'],
        ['4', '1', '1'],
        ['5', '4', '1'],
        ['1', '6', '2'],
        ['15'],
      ],
      rowHints: [
        ['10', '2'],
        ['9', '1'],
        ['9', '4'],
        ['9', '5'],
        ['2', '5', '4'],
        ['1', '1', '2', '4'],
        ['2', '2', '2', '3'],
        ['2', '1', '2', '2', '2'],
        ['3', '2', '1', '2', '1'],
        ['3', '2', '1', '1', '1'],
        ['3', '2', '1', '1', '1'],
        ['2', '2', '1', '1', '1'],
        ['1', '1', '1'],
        ['2', '2'],
        ['15']
      ],
      answers: [
        [true, true, true, true, true, true, true, true, true, true, false, false, false, true, true],
        [true, true, true, true, true, true, true, true, true, false, false, false, false, false, true],
        [true, true, true, true, true, true, true, true, true, false, false, true, true, true, true],
        [true, true, true, true, true, true, true, true, true, false, true, true, true, true, true],
        [false, true, true, false, false, true, true, true, true, true, false, true, true, true, true],
        [true, false, false, true, false, false, false, false, true, true, false, true, true, true, true],
        [true, true, false, false, true, true, false, false, false, true, true, false, true, true, true],
        [true, true, false, true, false, false, true, true, false, true, true, false, false, true, true],
        [true, true, true, false, true, true, false, false, true, false, true, true, false, false, true],
        [true, true, true, false, false, false, true, true, false, true, false, false, true, false, true],
        [true, true, true, false, true, true, false, false, true, false, false, false, true, false, true],
        [false, true, true, false, false, false, true, true, false, true, false, false, true, false, true],
        [true, false, false, false, false, false, false, false, false, false, false, false, true, false, true],
        [true, true, false, false, false, false, false, false, false, false, false, false, false, true, true],
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
      ]
    },
  ]
};

