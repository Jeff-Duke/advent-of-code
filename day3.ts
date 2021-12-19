import { exampleDiagnostics, diagnostics } from './day3-input';

class DiagnosticsReport {
  private static buildPlaceholder(input: string) {
    const placeholder: { string?: { '0': number; '1': number } } = {};
    input.split('').forEach((_, index) => ((placeholder[index.toString() as any] as any) = { '0': 0, '1': 0 }));
    return placeholder;
  }

  static processDiagnostics(input: string[]) {
    const result = this.buildPlaceholder(input[0]);
    input.forEach((diagnostic) => {
      diagnostic.split('').forEach((digit, index) => {
        result[index.toString()][digit] += 1;
      });
    });
    return result;
  }

  static calcValuesFromDiagnostic(input) {
    const gamma: string[] = [];
    const epsilon: string[] = [];
    Object.values(input).forEach((val, index) => {
      if (val['0'] > val['1']) {
        gamma[index] = '0';
        epsilon[index] = '1';
      } else {
        gamma[index] = '1';
        epsilon[index] = '0';
      }
    });
    return { gamma: parseInt(gamma.join(''), 2), epsilon: parseInt(epsilon.join(''), 2) };
  }

  static runDiagnostics(input: string[]) {
    const processedDiagnostics = this.processDiagnostics(input);
    const { gamma, epsilon } = this.calcValuesFromDiagnostic(processedDiagnostics);
    console.log('Gamma: ', gamma, 'Epsilon: ', epsilon, 'Consumption: ', gamma * epsilon);
  }
}

DiagnosticsReport.runDiagnostics(diagnostics);
