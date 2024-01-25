export interface TextsType {
  Home: {
    h1: {
      span: string;
      content: string;
    };
    p: {
      span: string;
      content: string;
    };
    NavLink: string;
  };
  Header: {
    p: string;
  };
  ExpenseForm: {
    labels: {
      item: string;
      cost: string;
      category: string;
    };
    option: string;
    button: string;
  };
  ExpenseFilter: {
    label: string;
    option: string;
  };
  ExpenseList: {
    starting: string;
    th: {
      items: string;
      costs: string;
      categories: string;
    };
    td: string;
  };
  Footer: {
    p: {
      span: string;
      content: string;
    };
  };
  NotFound: {
    h2: string;
  };
}
